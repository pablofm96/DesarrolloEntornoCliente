document.write("<table border=2>");

for (let i=1; i<=30; i++){
    let angulo = i * Math.PI/180;
    let seno = Math.sin(angulo)*180/Math.PI;
    document.write("<tr>")
    document.write("<td>"+i+"</td>");
    document.write("<td>" + seno +"</td>");
    document.write("</tr>");
}
document.write("</table>");