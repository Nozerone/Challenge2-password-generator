var generateBtn = document.querySelector
("#generate");

function generatePassword(){

// arrays of possible choices.

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3", "4", "5","6","7","8","9"];
var resultArray = [];
var userChoice = [];

//declared functions

  var chosenCharacterLength =  prompt("how many characters would you like your password to be? Please choose between 8 and 128 ");
  
  var chosenSpecialChar =  confirm("Do you want to use special characters?");

  var chosenUpperCase = confirm("DO you want to use Upper Case Characters?");
  
  var chosenLowerCase = confirm("Do you want to use lower case characters?");
 
  var chosenNumbers =confirm("Do you want to use numbers?");


// if statements 

  if (chosenNumbers){
    resultArray = resultArray.concat(numbers);
  }
  
  if (chosenSpecialChar) {
    resultArray = resultArray.concat(specialChar);
  }
    
  if (chosenLowerCase) {
    resultArray = resultArray.concat(lowerCase);

  } 
  if (chosenUpperCase) {
    resultArray = resultArray.concat (upperCase);
  }
  console.log(resultArray)
    

  for (var i =0; i < chosenCharacterLength; i++) {
    userChoice.push (resultArray[Math.floor(
      Math.random() * resultArray.length)]);
    }
    return userChoice.join("");
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
