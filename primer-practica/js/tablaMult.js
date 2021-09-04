function escribirTablaMultiplicar() {
    var tabla = parseInt(prompt("¿Cuál tabla nacesita saber?"));

    if (isNaN(tabla)) {
        document.write("<h2 id=\"miH1\">No ingresó ningun dato</h2>");
    } else {
        if (tabla == 0 || tabla < 1) {
            document.write("<h2 id=\"miH1\">Ingresa dato de 1 en delante</h2>");
        } else {
            document.write("<h2 id=\"miH1\">Tabla de multiplicar del " + tabla + "</h2>");
            document.write("<ul>");


            for (i = 1; i <= 10; i++) {
                document.write("<li class=\"OrderLiH\" id=\"OrderLiH" + i + "\">");
                document.write(tabla + " X " + i + " = " + tabla * i);
                document.write("</li>");
            }

            document.write("</ul>");
            document.write("<a href=\"javascript:location.reload()\" class=\"hrf\"><input type='button' value='Otra tabla' class=\"boton2\"></a>");

        }
    }
}

window.onload = escribirTablaMultiplicar();