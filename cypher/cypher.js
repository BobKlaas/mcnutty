//Constants
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Form Submit Function
function formSubmit(){
  //Set Cypher Shift from Form Input
  var shiftNumber = document.getElementById('inputShifter').value;

  //Set Phrase to Local Variable
  var phrase = document.getElementById('txtPhrase').value.toUpperCase();
  
  //Get modulus (remainder) of user inputed shift number
  shiftNumber = shiftNumber % 26;
  
  //Run shiftCypher method to shift alphabet array
  var shiftedAlphabet = shiftCypher(shiftNumber); 

  //Display Shifted Alphabet
  displayShiftedAlphabet(shiftedAlphabet,shiftNumber);

  //Encode Phrase
  var encodedPhrase = encodePhrase(phrase,shiftedAlphabet);

  //Display Encoded Phrase
  $('#originalPhrase').html('Original Phrase: ' + phrase);
  $('#encodedPhrase').html('Encoded Phrase: ' + encodedPhrase);
  
  //Remove Hidden Class from DOM element to show phrases
  document.getElementById("phrases").classList.remove("d-none");
}

//Takes the Alphabet and shifts it by the shift paramerter passed in
function shiftCypher(shift){
  var shiftedAlphabet = [];
  
  //Shift Number is positive, go clockwise
  if(shift >= 0){
    //Add Characters from shift position until Z
    shiftedAlphabet = alphabet.slice(shift,26);

    //Add Characters from A to shift position
    for(i=0; i<shift; i++){
      shiftedAlphabet.push(alphabet[i]);
    }
  }
  
  //Shift Number is negative, go counter-clockwise
  if(shift <= 0){
    //Add characters from shift position to z
    shiftedAlphabet = alphabet.slice(shift,26);

    //Add characters from A to shift position
    for(i=0; i<(26+shift); i++){
      shiftedAlphabet.push(alphabet[i]);
    }
  }

  return shiftedAlphabet;
}

//Update DOM with new cypher position
function displayShiftedAlphabet(shiftedAlphabet,shiftNumber){
  //Set Shift Number in Grid
  $('#RShift').html(shiftNumber);

  //Loop over array and set each <td> html cell by position
  for(var i=0; i<shiftedAlphabet.length; i++){
    //Set DOM to new cypher position
    $('#R1P'+(i+1)).html(shiftedAlphabet[i]);  
  }
}

//Encode phrase with shiftedAlphabet
function encodePhrase(phrase,shiftedAlphabet){
  var encodedPhrase = '';
  
  //Loop Over Phrase and Encode Each Letter
  for(var i=0; i<phrase.length; i++){

    //Get current letter in loop
    var l = phrase.substring(i,i+1);
    
    //[IF] Character is not a space, encode it [ELSE] Character is a space, add a space
    if(l!==' '){
      //Find position of letter in alphabet
      var position = alphabet.indexOf(l);

      //Look up same position in shifted alphabet array
      encodedPhrase = encodedPhrase + shiftedAlphabet[position];    
    }else{
      //Character is a space, add a space - No encode necessary
      encodedPhrase = encodedPhrase + ' ';    
    }
  }
  
  return encodedPhrase;
}
