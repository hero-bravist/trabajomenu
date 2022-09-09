function generarGrafico(){
    let espacio = document.getElementById('grafico').value;
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let valor3 = document.getElementById('valor3').value;
    let valor4 = document.getElementById('valor4').value;

    plotly.newplot(espacio, [{
        x: [valor1, valor3],
        y: [valor2, valor4]}]);

    // var data = [{
    //     x: [valor1, valor3]
    // }]
}
function grafico(){
    let espacio = document.getElementById('grafi').value;
    let valo1  = document.getElementById('valuno').value;
    let valo2 = document.getElementById('valdos').value;
    let valo3 = document.getElementById('valtres').value;

    plotly.newplot(grafi, [{
        x: [valo1, valo2, valo3],
        y: []}]);
}