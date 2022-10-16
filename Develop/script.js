function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generatePassword() {
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // Prompt for password length
  var defaultPasswordLength = 8;
  var passwordLength = prompt('What length password?  Please enter a number between 8 and 128', defaultPasswordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    return 'Invalid, password length should be between 8 and 128'
  }

  // Generate a lowercase password
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    password = password + lowerCase[getRandomInt(0,lowerCase.length)];
  }

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
