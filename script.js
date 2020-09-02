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
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
