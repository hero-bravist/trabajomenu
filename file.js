function generarPDF(){

    let nombre = document.getElementById('nom').value
    let apellido = document.getElementById('ape').value
    let correo = document.getElementById('mail').value

    // alert(nombre + "" + apellido + correo)

    var documentPDF = new jsPDF();
    documentPDF.setfontsize(20);
    documentPDF.text(20,20, 'reporte de ventas');
    documentPDF.setfontsize(12);
    documentPDF.text(20,30, 'fecha:' + new date());
    documentPDF.setfontsize(10);
    documentPDF.text(20,50, 'usuario:' + nombre);
    documentPDF.text(20,60, 'apellido' + apellido);
    documentPDF.text(20,70, 'correo:' + correo);
    documentPDF.save('archivo.PDF');
}   
