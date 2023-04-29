function calcular() {
    var aporte = document.getElementById('aporte').value;
    var lucro = document.getElementById('lucro').value;
    var stop = lucro /2;
    var res = (aporte/4)
    document.getElementById('resultado').innerHTML = "O stop loss ideal é de R$ " + stop.toFixed(2);
    document.getElementById('resultado2').innerHTML = "A perda máxima permitida é de R$ " + res.toFixed(2);
  }
  var aporte = document.getElementById('aporte');
  aporte.addEventListener('input', function() {
    // Obtem o valor do campo de entrada
    var valorAporte = parseFloat(aporte.value);
    
    // Calcula a perda máxima permitida
    var perdaMaxima = valorAporte / 4;
    
    // Exibe a mensagem com a perda máxima permitida
    document.getElementById('resultado2').innerHTML = "<strong>A perda máxima permitida no dia é de R$ " + perdaMaxima.toFixed(2);
  });
  
