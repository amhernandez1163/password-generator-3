// Assignment code here 

// array upper
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array lower
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// aaray numeric
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// array spec charc
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];



function validatePassword () {
  //when user clicks button - prented w a series of prompts

  // prompt = length of password 8 min - 128 max // text input? 
  var getCharacterInput = window.prompt("Total Character Count? Please enter a value from 8 - 128")
    
    if ((getCharacterInput === "" || getCharacterInput > 128 || getCharacterInput < 8)) {
      window.alert("Please enter a valid entry.");
      validatePassword ();
    } else {
      console.log("Your character count is " + getCharacterInput);
      } 

  // prompt = lowercase? // confirm? - variables set up above

  // prompt = uppercase? // confirm? - variables set up above

  // prompt = numeric // confirm? - variables set up above

  // prompt = special characters //  confirm? - variables set up above
    validatePassword();
  
  


  // prompts = must be at least one selected - then validate - how? 






  // this return will pass to var password and display on the screen
  return "Gererated password will go here";
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = validatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




