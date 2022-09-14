function hamburguesa(){
    let hambur = document.getElementById('sel1').value
    let bebida = document.getElementById('sel2').value
    let postre = document.getElementById('sel3').value
    let personas = document.getElementById('personas-uno').value
    let nombre = document.getElementById('nombre-uno').value
    let direccion = document.getElementById('direccion-uno').value
    
    var documentPDF = new jsPDF();
    documentPDF.setFontSize(20);
    documentPDF.text(20,20, 'reporte de ventas');
    documentPDF.setFontSize(12);
    documentPDF.text(20,30, 'fecha:' + new Date());
    documentPDF.setFontSize(10);
    documentPDF.text(20,50, 'hamburguesa:' + hambur );
    documentPDF.text(20,60, 'bebida:' + bebida );
    documentPDF.text(20,70, 'postre:' + postre );
    documentPDF.text(20,80, 'personas:' + personas );
    documentPDF.text(20,90, 'Nombre:' + nombre );
    documentPDF.text(20,100, 'direccion:' + direccion );
    documentPDF.save('archivo.PDF');

}
function perro(){
    let hambur = document.getElementById('sel1').value
    let bebida = document.getElementById('sel2').value
    let postre = document.getElementById('sel3').value
    let personas = document.getElementById('personas-uno').value
    let nombre = document.getElementById('nombre-uno').value
    let direccion = document.getElementById('direccion-uno').value
    
    var documentPDF = new jsPDF();
    documentPDF.setFontSize(20);
    documentPDF.text(20,20, 'reporte de ventas');
    documentPDF.setFontSize(12);
    documentPDF.text(20,30, 'fecha:' + new Date());
    documentPDF.setFontSize(10);
    documentPDF.text(20,50, 'perro:' + hambur );
    documentPDF.text(20,60, 'bebida:' + bebida );
    documentPDF.text(20,70, 'postre:' + postre );
    documentPDF.text(20,80, 'personas:' + personas );
    documentPDF.text(20,90, 'Nombre:' + nombre );
    documentPDF.text(20,100, 'direccion:' + direccion );
    documentPDF.save('archivo.PDF');

}