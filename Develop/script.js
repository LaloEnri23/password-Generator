// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("GOOD Job you clicked a button!");
//1:Prompt the user password criteria
//2:Validate input
//3:Generated password based on criteria
//4:Display password to the page 

  return "Generated Password Aqui!";
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Create arrays of password criteria
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|","<",">","'","?",","]

// Ask user for password criteria
function askUserForCriteria() {
  let length, askNumbers, askLowerCase, askUpperCase, askSpecial;
  
  do {
    length = parseInt(prompt("Choose password length between 8 and 128 characters"));
  } while (isNaN(length) || length < 8 || length > 128);
  
  do {
    askNumbers = confirm ("Do you want your password to include numbers?");
    askLowerCase = confirm ("Do you want your password to include lower case letters?");
    askUpperCase = confirm ('Do you want your password to include upper case letters?');
    askSpecial = confirm ("Do you want your password to include special character? Example: !; . ; _ ; - ; etc.");
  } while (!askNumbers && !askLowerCase && !askUpperCase && !askSpecial);

  return { length, askNumbers, askLowerCase, askUpperCase, askSpecial };
}

// Generate password based on user criteria
function generatePassword() {
  const { length, askNumbers, askLowerCase, askUpperCase, askSpecial } = askUserForCriteria();
  let possibleCombo = [];
  let finalPassword = "";

  if (askNumbers) {
    possibleCombo = possibleCombo.concat(numbers);
  }
  if (askLowerCase) {
    possibleCombo = possibleCombo.concat(lowercase);
  }
  if (askUpperCase) {
    possibleCombo = possibleCombo.concat(uppercase);
  }
  if (askSpecial) {
    possibleCombo = possibleCombo.concat(special);
  }

  for (let i = 0; i < length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  
  return finalPassword;
}

// Write generated password to the #password input field
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

