// Assignment code here 
// Values for validatePassword function
// array upper
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array lower
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// aaray numeric
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// array spec charc
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
// catch all for vaiables
var characters = []

//when user clicks button - prented w a series of prompts - BEGIN PROMPTS
function validatePassword () {

  // prompt for length of password 8 min - 128 max // text input
  var characterLengthPrompt = window.prompt("Total Character Count? Please enter a value from 8 - 128")
  
  // parameters for invalid responses - window alert then return to beginning
  const isInteger = characterLengthPrompt;  
  if ((characterLengthPrompt === "" || characterLengthPrompt > 128 || characterLengthPrompt < 8 || characterLengthPrompt != isInteger)) {
      window.alert("Please enter a valid entry.");
      return validatePassword();
    } else {
      characters = characters.concat(characterLengthPrompt)
      console.log("Your character count is " + characterLengthPrompt);
      } 
  // prompt = uppercase // confirm 
  var uppercasePrompt = window.confirm("Would you like uppercase values in your password?");
  
    if (uppercasePrompt) {
      characters = characters.concat(uppercase);
    } else {
      console.log("Uppercase value not wanted");
    }
  // prompt = lowercase // confirm 
  var lowercasePrompt = window.confirm("Would you like lowercase values in your password?");
      
    if (lowercasePrompt) {
      characters = characters.concat(lowercase);
    } else {
      console.log("Lowercase value not wanted");
    }

  // prompt = numeric // confirm  
  var numericPrompt = window.confirm("Would you like numeric values in your password?");
  
    if (numericPrompt) {
      characters = characters.concat(numeric);
    } else {
      console.log("Numeric values not wanted");
    }

  // prompt = special characters //  confirm 
  var specialCharactersPrompt = window.confirm("Would you like special character values in your password?");
    if (specialCharactersPrompt){
      characters = characters.concat(specialCharacters);
    }  else {
      console.log("Special Characters values not wanted");
    } 
    // prompt = must be at least one selected 
    if (uppercasePrompt == false && lowercasePrompt == false && numericPrompt == false && specialCharactersPrompt == false) {
      window.alert("You must choose at least one value.")
      validatePassword();
    }

    var randomPassword = "";
      // for loop to generate new password w values selected
      for (i = 0; i < characterLengthPrompt; i++) {
        randomPassword = randomPassword + characters[Math.floor(Math.random() * characters.length)];
      }
    
   return randomPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = validatePassword();
 var passwordText = document.getElementById("password");

 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




