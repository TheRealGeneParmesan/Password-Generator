// Assignment Code.. added elements to the HTML and assigning these global variables to later call them through getelementid 
var generateBtn = document.querySelector("#generate");
var hasLower;
var hasUpper;
var hasNumber;
var hasSpecialChar;
var passLength;

// Generator functions. Using char codes, which I found from a tutorial video on how to create a password generator. 

// Get a random lower case number. Multiply by 26 letters in the alphabet and then use math.floor to make sure we get whole numbers
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Get random upper but using 65 instead of 97 to get a random uppercase starting from A. Still multiplying by 26 as we're still getting letters

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Starting at 48 since 48 = 0 in the browser character set and then multiplying by 10 rather than 26 letters of the alphabet. Numbers 0-9 = 10
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


// Using a string of special characters here
function getSpecialChar() {
  var specialChar = '!@#$%^&*()_+';
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}


// Add event listener to generate button (code gets triggered when the generate password button is clicked)
generateBtn.addEventListener("click", writePassword)

function promptOptions() {
  hasLower = confirm('Would you like to include a lowercase letter?');
  document.getElementById("hasLower").innerHTML = hasLower;
  hasUpper = confirm('Would you like to choose an uppercase letter?');
  document.getElementById("hasUpper").innerHTML = hasUpper;
  hasSpecialChar = confirm('Would you like to include a special character?');
  document.getElementById("hasSpecialChar").innerHTML = hasSpecialChar;
  hasNumber = confirm('Would you like to include a number?');
  document.getElementById("hasNumber").innerHTML = hasNumber;
  passLength = prompt("How long do you want your password to be?");
  document.getElementById("passLength").innerHTML = passLength;
}

// if and else statements 
// for loop for the length of the password, are lower case allowed, etc. depending on what's allowed, fill the password. 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// function to generate password
// Need to write a for loop that loops through the number of letters in password
// For each letter we need to decide if lower case, upper case, numbers and special characters are included 


function generatePassword() {
  var generatedPassword = '';

  promptOptions()



  var numberOfOptions = hasLower + hasUpper + hasSpecialChar + hasNumber;
  for (i = 0; i < passLength; i++) {
    var selectedOptionNum = (Math.floor(Math.random() * numberOfOptions));
    // pick random number between 0 and number of options  

    console.log(selectedOptionNum);

    if (selectedOptionNum == 0) {
      generatedPassword = generatedPassword + getRandomLower();
    }

    if (selectedOptionNum == 1) {
      generatedPassword = generatedPassword + getRandomUpper();
    }

    if (selectedOptionNum == 2) {
      generatedPassword = generatedPassword + getRandomNumber();
    }

    if (selectedOptionNum == 3) {
      generatedPassword = generatedPassword + getSpecialChar();
    }
  }

  return generatedPassword;
}















