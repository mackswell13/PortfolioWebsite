var input;
var type;
var output;
var finalOutPut;

const key =[['A', 'N'], ['B', 'O'], ['C', 'P'], ['D', 'Q'], ['E', 'R'], ['F', 'S'], ['G', 'T'], ['H', 'U'], ['I', 'V'], ['J', 'W'], ['K', 'X'], ['L', 'Y'], ['M', 'Z'], ['N', 'A'], ['O', 'B'], ['P', 'C'], ['Q', 'D'], ['R', 'E'], ['S', 'F'], ['T', 'G'], ['U', 'H'], ['V', 'I'], ['W', 'J'], ['X', 'K'], ['Y', 'L'], ['Z', 'M'], [' ', ' '], ['!', '!'], ['.', '.'], ['?', '?']];



document.getElementById("submit").addEventListener('click', ()=> {
  input = document.getElementById("text_in").value;
  type = document.getElementById("convert_type").value;
  
  // this will create a visibility var that lets us know how to output the code.
  const outputVis = $("h2").css("visibility");
  console.log(input);
  console.log(type);
  console.log(outputVis);


  if (type === "toEnglish"){
    output = encript(input);
    console.log(output);
  }
  else{
    output = decript(input);
    console.log(output);
  }
  document.querySelector('h2').innerHTML = output;

  if (outputVis === "hidden"){
    $("h2").css("visibility", "visible");
  }
  

})



function decript(str) {
  str = str.toUpperCase();
  var arrStr = str.split('');
  var final = new Array(arrStr.length);
  var i;
  var j;
  
  for (i = 0; i < arrStr.length; i++){
      for (j = 0; j < key.length; j++){
          if(arrStr[i] === key[j][0]){
            final.push(key[j][1]);
          }
      }
  }
  final = final.toString();
  final = final.replaceAll(',', '');
  
  return final;
  }
  
  
  


  function encript(str) {
    str = str.toUpperCase();
    var arrStr = str.split('');
    var final = new Array(arrStr.length);
    var i;
    var j;
    
    for (i = 0; i < arrStr.length; i++){
        for (j = 0; j < key.length; j++){
          if(arrStr[i] === key[j][1]){
              final.push(key[j][0]);
          }
        }
    }
    final = final.toString();
    final = final.replaceAll(',', '');
    
    return final;
    }
    
