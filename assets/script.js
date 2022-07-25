// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function ask1(){
    var length = prompt("Please choose a character length between 8 and 128.");

    if (length < 8 || length > 128){
        prompt("Refresh the page and enter a number between 8 and 128.");
    } else if (length > 8 && length < 128){
        prompt("Enter your desired character type: uppercase, lowercase, special, numeric.")
    }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",ask1)
generateBtn.addEventListener("click", writePassword);