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
  var combinedString;

  var generatedPassword;

  passwordLength = prompt(
    "Please enter a number between 8 and 128 for the desired length of your password."
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Password length must be a number between 8 and 128. Please start again."
    );
    return false;
  }

  specialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  numbers = confirm("Click OK to confirm including numbers characters.");
  lowerCase = confirm("Click OK to confirm including lower case characters.");
  upperCase = confirm("Click OK to confirm including upper case characters.");
  if (
    specialCharacters == "" &&
    numbers == "" &&
    lowerCase == "" &&
    upperCase == ""
  ) {
    alert(
      "Password must have a selection from at least one of the following categroies: special characters, numbers, lowercase letters or uppercase letters. Please start again."
    );
    return false;
  }
  specialCharacterString = "'~`!@#$%^&*()_+-={}[]:;'<>?,./|\\";
  numberString = "0123456789";
  lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  combinedString = specialCharacterString + numberString;

  for (var i = 0; i <= passwordLength; i++) {
    var index = Math.floor(Math.random() * combinedString.length + 1);
    generatedPassword += combinedString[index];
  }
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
