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
  var lengthOfPassword = prompt(
    "How many characters would you like your password to contain? Pease choose a length between 8 and 128."
  );
  if (
    lengthOfPassword < 8 ||
    lengthOfPassword > 128 ||
    isNaN(lengthOfPassword)
  ) {
    alert("Password length must be a number between 8 and 128.");
    fail;
  }

  var specialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  var numbers = confirm("Click OK to confirm including number.");
  var lowerCase = confirm("Click OK to confirm including lower case.");
  var upperCase = confirm("Click OK to confirm including  upper case.");
  if (
    specialCharacters == "" &&
    numbers == "" &&
    lowerCase == "" &&
    upperCase == ""
  ) {
    alert(
      "Password must have a selection from at least one of the following categroies: special character, number, lower case or upper case ."
    );
    fail;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
