// Assignment code here
function generatePassword() {

  //when button is clicked(generateBtn), prompts are presented:
  //  1. pw length is between 8 - 128
  var pwLength = prompt("Please input a length between 8 and 128.");
  //  2. ask to include: lowercase, uppercase, numerics, special characters
  var pwLowercase = confirm("Include lowercase?");
    if (confirm("Include lowercase?") == true) {

    }
  var pwUppercase = confirm("Include uppercase?");
  var pwNumerics = confirm("Include numbers?");
  var pwSpecials = confirm("Include special characters?");
  //  3. generate password based on selections
  //  4. validate user input and then make sure AT LEAST 1 character type is selected
  
  //  5. when all prompts answered, display password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
