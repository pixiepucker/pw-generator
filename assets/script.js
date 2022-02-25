// Assignment code here
function generatePassword() {
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
    '0','1','2','3','4','5','6','7','8','9'
  ];

  const pwSpecChar = [
    '!','#','$','%','&','(',')','*','@','?','_','+','^'
  ];
  //when button is clicked(generateBtn), prompts are presented:
  //  1. pw length is between 8 - 128
  var pwLength = prompt("Please input a password length between 8 and 128.");

  //  2. ask to include: lowercase, uppercase, numerics, special characters
  var pwLowercase = confirm("Include lowercase?");
  var pwUppercase = confirm("Include uppercase?");
  var pwNumerics = confirm("Include numbers?");
  var pwSpecials = confirm("Include special characters?");
  
  //  3. generate password based on selections
  var genPW = function () {
    //add array for user selections
    let selectedCharacters = [];
    //if user wants lowercase add them to selectedCharacters array
    if (pwLowercase == true ) {
      selectedCharacters = [...selectedCharacters, ...pwLowers];
    } else {
      alert("Lowercase letters will not be included. If this was a mistake, please refresh.");
    }
    //if user wants uppercase add them to selectedCharacters array
    if (pwUppercase == true) {
      selectedCharacters = [...selectedCharacters, ...pwUppers];
    } else {
      alert("Uppercase letters will not be included. If this was a mistake, please refresh.");
    }
    //if user wants numbers add them to selectedCharacters array
    if (pwNumerics == true) {
      selectedCharacters = [...selectedCharacters, ...pwNumbers];
    } else {
      alert("Numbers will not be included. If this was a mistake, please refresh.");
    }
    //if user wants special characters add them to selectedCharacters array
    if (pwSpecials == true) {
      selectedCharacters = [...selectedCharacters, ...pwSpecChar];
    } else {
      alert("Special characters will not be included. If this was a mistake, please refresh.");
    }
    console.log(selectedCharacters)
  };
  genPW();
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
