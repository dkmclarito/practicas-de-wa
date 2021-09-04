function init() {
    //Ingresar los datos a convertir
    var op1 = prompt('Ingrese la cantidad de metros', '');
    var operaciones = document.getElementById('operaciones');

    var contenido = "<nav>";
    contenido += "<ul class=\"orderUl\">\n";

    contenido += "\t<li class=\"OrderLi\">\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"><input type='button' value='Pies' class=\"boton\"></a>\n";
    contenido += "\t</li>\n";
    contenido += "\t<li class=\"OrderLi\">\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"><input type='button' value='Pulgadas' class=\"boton\"></a>\n";
    contenido += "\t</li>\n";
    contenido += "\t<li class=\"OrderLi\">\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"><input type='button' value='Yardas' class=\"boton\"></a>\n";
    contenido += "\t</li>\n";

    contenido += "</ul>\n";
    contenido += "</nav>\n";

    operaciones.innerHTML = contenido;
    miH1.innerHTML = "Convertir " + op1 + " metros A:";

    recargar.innerHTML = "<a href=\"javascript:location.reload()\"><input type='button' value='Insertar dato nuevamente' class=\"boton2\"></a>";
    var opciones = document.getElementsByTagName('a');

    for (var i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:
                opciones[i].onclick = function() {
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalentes a " + (parseFloat(op1) * parseFloat(3.281)).toFixed(2) + " Pies </p>\n";
                }
                break;

            case 1:
                opciones[i].onclick = function() {
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalentes a " + (parseFloat(op1) * parseFloat(39.3701)).toFixed(2) + " Pulgadas </p>\n";
                }
                break;

            case 2:
                opciones[i].onclick = function() {
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalentes a " + (parseFloat(op1) * parseFloat(1.09361)).toFixed(2) + " Yardas </p>\n";
                }
                break;
        }
    }

}
window.onload = init();