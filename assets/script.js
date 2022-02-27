// Assignment code here 

// array upper
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array lower
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// aaray numeric
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// array spec charc
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

// randomize vars

var randomUppercase = Math.floor(Math.random() * [uppercase]);



function validatePassword () {
  //when user clicks button - prented w a series of prompts

  // prompt for length of password 8 min - 128 max // text input
  var characterLength = window.prompt("Total Character Count? Please enter a value from 8 - 128")
  
  // parameters for invalid responses - window alert then return to beginning
  const isInteger = characterLength;  
  if ((characterLength === "" || characterLength > 128 || characterLength < 8 || characterLength != isInteger)) {
      window.alert("Please enter a valid entry.");
      return validatePassword();
    } else {
      console.log("Your character count is " + characterLength);
      } 
  // prompt = uppercase? // confirm? - variables set up above
  var uppercase = window.confirm("Would you like uppercase values in your password?");
  
    if (uppercase) {
      console.log(uppercase);
    } else {
      console.log("Uppercase not wanted");
    }
  // prompt = lowercase? // confirm? - variables set up above
  var lowercase = window.confirm("Would you like lowercase values in your password?");
      
    if (lowercase) {
      console.log(lowercase);
    } else {
      console.log("Lowercase not wanted");
    }

  // prompt = numeric // confirm? - variables set up above  
  var numeric = window.confirm("Would you like numeric values in your password?");
  
    if (numeric) {
      console.log(numeric);
    } else {
      console.log("Numeric not wanted");
    }

  // prompt = special characters //  confirm? - variables set up above
  var specialCharacters = window.confirm("Would you like special character values in your password?");
    if (specialCharacters){
      console.log(specialCharacters);
    }  else {
      console.log("Special Characters not wanted");
    } 
    // prompt = must be at least one selected 
    if (uppercase == false && lowercase == false && numeric == false && specialCharacters == false) {
      window.alert("You must choose at least one value.")
      validatePassword();
    }

    while (uppercase === true) {
      console.log(randomUppercase)
      break;
    }
  
    // based off inputs, assign a random value from the different var families
   // if (uppercase === true && lowercase === true && numeric === true && specialCharacters === true){
   //   return 
   // }

  validatePassword();
  
  


  






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




