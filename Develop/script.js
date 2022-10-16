function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generatePassword() {
  var characters =[]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var special = ["!","£","$","%","^","&","*"];

  // Prompt for password length
  var defaultPasswordLength = 8;
  var passwordLength = prompt('What length password?  Please enter a number between 8 and 128', defaultPasswordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    return 'Invalid, password length should be between 8 and 128'
  }

  // Prompt for character types
  var useLowerCase = confirm("Would you like the password to include lowercase characters?");
  var useUpperCase = confirm("Would you like the password to include uppercase characters?");
  var useNumbers = confirm("Would you like the password to include numbers?");
  var useSpecialCharacters = confirm("Would you like the password to include special characters?");

  // Build up array of characters based on desired character types
  if (useLowerCase) {
    characters = characters.concat(lowerCase);
  }

  if (useUpperCase) {
    characters = characters.concat(upperCase);
  }

  if (useNumbers) {
    characters = characters.concat(numbers);
  }

  if (useSpecialCharacters) {
    characters = characters.concat(special);
  }

  // Check that at least one character type has been selected
  if (characters.length == 0) {
    return 'Invalid, please select at least one character type'
  }

  // Generate a password
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    password = password + characters[getRandomInt(0,characters.length)];
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
