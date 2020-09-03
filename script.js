// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//All my code goes here
function generatePassword() {
  var passwordLength;

  var specialCharacters;
  var numbers;
  var lowerCase;
  var upperCase;

  var specialCharacterString;
  var numberString;
  var lowerCaseString;
  var upperCaseString;
  var combinedString = "";

  var generatedPassword = "";
  var guaranteedCharacters = "";

  passwordLength = prompt(
    "Please enter a number between 8 and 128 for the desired length of your password."
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Password length must be a number between 8 and 128. Please start again."
    );
    return "Please try again.";
  }

  specialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  numbers = confirm("Click OK to confirm including numbers characters.");
  lowerCase = confirm("Click OK to confirm including lower case characters.");
  upperCase = confirm("Click OK to confirm including upper case characters.");
  if (!specialCharacters && !numbers && !lowerCase && !upperCase) {
    alert(
      "Password must have a selection from at least one of the following categroies: special characters, numbers, lowercase letters or uppercase letters. Please start again."
    );
    return "Please try again.";
  }

  specialCharacterString = "'~`!@#$%^&*()_+-={}[]:;'<>?,./|\\";
  numberString = "0123456789";
  lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (specialCharacters) {
    combinedString += specialCharacterString;
    var index = Math.floor(Math.random() * specialCharacterString.length);
    guaranteedCharacters += specialCharacterString[index];
  }
  if (numbers) {
    combinedString += numberString;
    var index = Math.floor(Math.random() * numberString.length);
    guaranteedCharacters += numberString[index];
  }
  if (lowerCase) {
    combinedString += lowerCaseString;
    var index = Math.floor(Math.random() * lowerCaseString.length);
    guaranteedCharacters += lowerCaseString[index];
  }
  if (upperCase) {
    combinedString += upperCaseString;
    var index = Math.floor(Math.random() * upperCaseString.length);
    guaranteedCharacters += upperCaseString[index];
  }

  var remainingLength = passwordLength - guaranteedCharacters.length;
  for (var i = 0; i < remainingLength; i++) {
    var index = Math.floor(Math.random() * combinedString.length);
    generatedPassword += combinedString[index];
  }

  return generatedPassword + guaranteedCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
