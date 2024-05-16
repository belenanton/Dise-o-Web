function suma () {

    var total = 0;

    var valor1=parseInt(document.getElementById("txtvalor1").value);
    var valor2=parseInt(document.getElementById("txtvalor1").value);
    total = valor1 + valor2;

    document.getElementById("txtresultado").value=total;


}

var numero=1;

function adelantar()
{
    numero++;
    if(numero>4)
        numero=1
    var foto = document.getElementById("img");
    foto.src = "imagenes/img" + numero + ".jpeg";
} 

function retroceder()
{

    numero--;
    if (numero<1)
        numero=4;
        var foto = document.getElementById("img");
        foto.src="imagenes/img" + numero + ".jpeg";
}