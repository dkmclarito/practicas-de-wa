//funcion que trabaja como manejador de eventos

function init() {
    var op1 = prompt('Ingrese la cantidad de metros', '');
    var operaciones = document.getElementById('operaciones');

    var cont = "<header>";
    cont += "\t <h1> Calcular </h1> \n";
    cont += "</header>";

    cont += "<nav>";
    cont += "<ul> \n";
    cont += "\t <li> \n";

    cont += "\t\t <a href=\"javascript:void(0)\"> <input type='button' value='Pies'></a>\n";

    cont += "\t </li> \n";
    cont += "</ul> \n";
    cont += "</nav> \n";

    operaciones.innerHTML = cont;
    var opciones = document.getElementById('a');

    for (var i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:
                opciones[i].onclick = function
         }
    }

}
window.onload = init();