/* I moved the given information from the starter code up here, with the exception of the event listener which should generally
be placed at the bottom of the JS page.*/

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// Assignment code here
/* Here I assigned variables for all possible user input options. */

var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowercase =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var number = "1234567890";

// Write password to the #password input

/* Below, I created a large function that includes 1 prompt for a user to enter how many characters they want in their final password.
I then included 4 prompts for a user to confirm on the webpage whether or not they want to include the following in their random
password: special characters, uppercase, lowercase, and numbers. I created a tempPass (temporary password) variable so that their
choices could be stored and remembered until the final password was ready to be displayed. */

function generatePassword(){
    var length = prompt("Please choose a character length between 8 and 128.");

    if (length < 8 || length > 128){
        prompt("Refresh the page and enter a number between 8 and 128.");
    } 

    if (isNaN(length)) {
        return 'Not a valid number. Refresh the page and try again.';
    }

    var tempPass = '';
    var password = '';

    var specialChar = confirm("Do you want to include special characters?");

    if (specialChar) {
        tempPass += special;
    }

    var numbCar = confirm("Do you want to include numbers?");

    if (numbCar) {
        tempPass += number;
    }

    var lowCa = confirm("Do you want to include lowercase letters?")

    if (lowCa) {
        tempPass += lowercase;
    }

    var uppCa = confirm("Do you want to include uppercase letters?")

    if (uppCa) {
        tempPass += uppercase;
    }

/* Below is the for loop I created in order for the computer to randomize a password using the user's parameters.*/

    for (var i= 0; i < length ; i++){
        var index = Math.floor(Math.random() * tempPass.length);
        password += tempPass[index];
    }
    return password;
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);