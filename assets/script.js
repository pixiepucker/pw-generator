// Assignment code here
//constants showing arrays of available characters
const pwLowers = [
  "a","b","c", "d", "f", "e", "g", "h", "i", 
  "j", "k", "l", "m", "n", "o", "p", "q", "r", 
  "s", "t", "u", "v", "w", "x", "y", "z"
];
const pwUppers = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z'
];
const pwNumbers = [
  0,1,2,3,4,5,6,7,8,9
];
const pwSpecChar = [
  '!','#','$','%','&','(',')','*','@','?','_','+','^'
];

function generatePassword() {
  //when button is clicked(generateBtn), prompts are presented:
  
  //  1. determine password length through prompt
  var pwLength = function() {
    var pwLengths = prompt("Please enter desired password length: ")
    if (pwLengths<8 || pwLengths>128) {
      alert('Please enter a value between 8 and 128.');
      pwLength();
      }
    };
    pwLength();

  //  2. ask to include: lowercase, uppercase, numerics, special characters
  var pwLowercase = confirm("Include lowercase?");
  var pwUppercase = confirm("Include uppercase?");
  var pwNumerics = confirm("Include numbers?");
  var pwSpecials = confirm("Include special characters?");
  //add array for user selections
  let selectedCharacters = [];
  //  3. generate password based on selections
  var genPW = function () {
    //if user wants lowercase add them to selectedCharacters array
    if (pwLowercase == true ) {
      selectedCharacters = [...selectedCharacters, ...pwLowers];
    }
    //if user wants uppercase add them to selectedCharacters array
    if (pwUppercase == true) {
      selectedCharacters = [...selectedCharacters, ...pwUppers];
    }
    //if user wants numbers add them to selectedCharacters array
    if (pwNumerics == true) {
      selectedCharacters = [...selectedCharacters, ...pwNumbers];
    }
    //if user wants special characters add them to selectedCharacters array
    if (pwSpecials == true) {
      selectedCharacters = [...selectedCharacters, ...pwSpecChar];
    }

    //4. validate user input and make sure AT LEAST 1 character type is selected
    if (selectedCharacters.length === 0) {
      alert("You must select at least one character type! Please try again.");
    } else {
      selectedCharacters.length == pwLength;
    }
  }
  genPW();
  //  5. take user input and generate password:
  let password = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
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
