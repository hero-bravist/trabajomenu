function hamburguesa(){
    let hambur = document.getElementById('sel1').value
    let bebida = document.getElementById('sel2').value
    let postre = document.getElementById('sel3').value
    let personas = document.getElementById('persona-uno').value
    let nombre = document.getElementById('nombre-uno').value
    let direccion = document.getElementById('direccion-uno').value
    
    var documentPDF = new jsPDF();
    documentPDF.setfontsize(20);
    documentPDF.text(20,20, 'reporte de ventas');
    documentPDF.setfontsize(12);
    documentPDF.text(20,30, 'fecha:' + new date());
    documentPDF.setfontsize(10);
    documentPDF.text(20,50, 'hamburguesa:' + sel1 );
    documentPDF.text(20,60, 'bebida:' + sel2 );
    documentPDF.text(20,70, 'postre:' + sel3 );
    documentPDF.text(20,80, 'personas:' + personas );
    documentPDF.text(20,90, 'Nombre:' + nombre );
    documentPDF.text(20,100, 'direccion:' + direccion );
    documentPDF.save('archivo.PDF');
}