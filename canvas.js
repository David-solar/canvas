var dibujo, lienzo;

function inicio()
{
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    var boton1 = document.getElementById("boton1");
    var boton2 = document.getElementById("boton2");
    var boton3 = document.getElementById("boton3");
    var boton4 = document.getElementById("boton4");
    var boton5 = document.getElementById("boton5");

    boton1.addEventListener("click", cargarImagen);
    boton2.addEventListener("click", dibujarGrilla);
    boton3.addEventListener("click", diagonales);
    boton4.addEventListener("click", pintarCirculo);
    boton5.addEventListener("click", limpiar);

    //dibujarGrilla(lienzo);
    //diagonales(lienzo);

    //contorno
    lienzo.beginPath();
    lienzo.strokeStyle = "#8181F7";
    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.closePath();
    lienzo.stroke();


    //linea
    /*lienzo.moveTo(100,100);
    lienzo.lineTo(200,100);
    lienzo.stroke();*/
    //lienzo.strokeStyle = "#F00";
}

function limpiar()
{
    lienzo.clearRect(0, 0, 300, 300);
    //contorno
    lienzo.beginPath();
    lienzo.strokeStyle = "#8181F7";
    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.closePath();
    lienzo.stroke();
}

function pintarCirculo()
{
    var caja2 = document.getElementById("caja2");
    var radio = Number(caja2.value);

    //circulo
    lienzo.beginPath();//permite hacer un nuevo trazo xon otro color
    lienzo.strokeStyle = "#82FA58";
    lienzo.arc(150, 150, radio, (Math.PI*2), false);
    lienzo.closePath();
    lienzo.stroke();
}

function cargarImagen()
{
    var imagen = new Image();
    imagen.src = "im.png";
    imagen.onload = function()
    {
        lienzo.drawImage(imagen, 0, 0, 300, 300);
    }
}

function dibujarGrilla()
{
    var ancho = 300;
    var alto = 300;
    var linea;
    var anchoLinea = 30;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;

    for(linea = 0; linea <= limiteX; linea++)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = "#AAA";
        lienzo.moveTo(linea * anchoLinea, 0);
        lienzo.lineTo(linea * anchoLinea, 300);
        lienzo.stroke();
        lienzo.closePath();
    }

    for(linea = 0; linea <= limiteY; linea++)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = "#AAA";
        lienzo.moveTo(0, linea * anchoLinea);
        lienzo.lineTo(300, linea * anchoLinea);
        lienzo.stroke();
        lienzo.closePath();

    }
}

function diagonales()
{
    var caja = document.getElementById("caja");
    totalLineas = (Number(caja.value))+1;
    var x = 300;
    var y = 300;
    var separacion = 600 / totalLineas;
    var limiteX = x / separacion;
    var limiteY = y / separacion;
    var linea;

    //
    for(linea = 0; linea < limiteX*2; linea++)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = "#FFFF00";
        lienzo.moveTo( (linea * separacion)+separacion ,0);
        lienzo.lineTo(0, (linea* separacion)+separacion);
        lienzo.stroke();
        lienzo.closePath();
    }

    /*for (linea = 0; linea < limiteY-1; linea++)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = "#FFFF00";
        lienzo.moveTo(x, (linea * separacion)+separacion);
        lienzo.lineTo((linea * separacion)+separacion, y);
        lienzo.stroke();
        lienzo.closePath();
    }*/

    for(linea = 0; linea < limiteY*2; linea++)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = "#DF01A5";
        lienzo.moveTo((linea * separacion) + separacion, y);
        lienzo.lineTo(0,y-((linea * separacion) + separacion));
        lienzo.stroke();
        lienzo.closePath();
    }

}