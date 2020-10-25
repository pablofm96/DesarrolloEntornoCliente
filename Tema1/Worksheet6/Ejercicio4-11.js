var height = prompt("Introduce altura");
var width = prompt("Introduce ancho");
var columnas = prompt("Introduce numero de columnas");

document.write('<table border ="0" cellspacing ="2" bgcolor ="black" width ="200">');
document.write('<tr bgcolor ="white" height ='+height+'>');

for (let i=0; i<columnas; i++){
    document.write('<td width="'+width+'>&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');