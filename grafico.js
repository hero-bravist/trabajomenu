// function generarGrafico(){
//     let espacio = document.getElementById('grafico').value;
//     let valor1 = document.getElementById('valor1').value;
//     let valor2 = document.getElementById('valor2').value;
//     let valor3 = document.getElementById('valor3').value;
//     let valor4 = document.getElementById('valor4').value;

//     plotly.newplot(espacio, [{
//         x: [valor1, valor3],
//         y: [valor2, valor4]}]);

    // var data = [{
    //     x: [valor1, valor3]
    // }]

// function grafico(){
//     let espacio = document.getElementById('grafi').value;
//     let valo1  = document.getElementById('valuno').value;
//     let valo2 = document.getElementById('valdos').value;
//     let valo3 = document.getElementById('valtres').value;

//     plotly.newplot(grafi, [{
//         x: [valo1, valo2, valo3],
//         y: []}]);
// }
function graficodos(){
    let espacio = document.getElementById('grafi');
    let espacios = document.getElementById('grafi2');
    let valor1  = document.getElementById('valuno').value;
    let valor2 = document.getElementById('valdos').value;
    let valor3 = document.getElementById('valtres').value;
    var data = [{
        values: [valor1, valor2, valor3],
        labels: ['saisfaccion', 'como le parecio', 'nivel de satisfaccion'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot( espacio, data, layout);

      var trace1 = {
        x: ['saisfaccion', 'como le parecio', 'nivel de satisfaccion'],
        y: [valor1, valor2, valor3],
        type: 'scatter'
      };
      

      
      var data = [trace1];
      
      Plotly.newPlot(espacios, data);
}
