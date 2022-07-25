// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// Assignment code here
 var special = [  '@','%','+','\\','/',"'",'!',
 '#',
 '$',
 '^',
 '?',
 ':',
 ',',
 ')',
 '(',
 '}',
 '{',
 ']',
 '[',
 '~',
 '-',
 '_',
 '.',]
 var uppercase = [  'A',
 'B',
 'C',
 'D',
 'E',
 'F',
 'G',
 'H',
 'I',
 'J',
 'K',
 'L',
 'M',
 'N',
 'O',
 'P',
 'Q',
 'R',
 'S',
 'T',
 'U',
 'V',
 'W',
 'X',
 'Y',
 'Z',]
var lowercase =  [ 'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',
]

var number = "1234567890";

// Write password to the #password input


function generatePassword(){
    var length = prompt("Please choose a character length between 8 and 128.");

    if (length < 8 || length > 128){
        prompt("Refresh the page and enter a number between 8 and 128.");
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

    for (var i= 0; i < length ; i++){
        var index = Math.floor(Math.random() * tempPass.length);
        password += tempPass[index];
    }
    return password;
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);