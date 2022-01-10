
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for lowercase, uppercase, numeric, and symbol values for generator to pull from
var alpha_L = "abcdefghijklmnopqrstuvwxyz";
var alpha_U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeral = "1234567890";
var symbolic = "!@#$%^&*()_+=-*/|<>;:'[]{}.?,`~";

// Global variables created so that they can be called into the functions
var characters;
var Upper;
var Num;
var Symb;


// Function that asks the user to specify the length of their password within the limits.
function checkLength() {

  //Variable that yields the input value from the user. Value is parsed from a string to an integer so that is can be used as a numeric value.
  Length = parseInt(prompt("How long would you like your password to be (Must be between 8 to 128 characters): "));

  //First conflict if the user inputs a length that is either lower than the min requirement or higher than the max requirement. returrns the prompt for user to input correct value.
  if (Length < 8 || Length > 128) {
    alert("You password needs to be between 8 to 128 characters");
    checkLength();

    //Second conflict if the user inputs a random phrase as a length. Same resultant situation for the user to input a correct value.
  } else if (isNaN(Length)) {
    alert("Please enter a valid response");
    checkLength();

    // When user inputs a length within the bounds, then message is shown that indicates start for criteria specifications. 
  } else {
    alert("On with the show!");
  }
  // Function is terminated when input is correct
  return Length;
  
}


// Function that asks the user to specify usage of uppercase letters in the password.
function uppercase() {
  Upper = prompt("Would you like uppercase letters?")

  // Condition for when user specifies that they want uppercase letters in their password. Input is saved and function is terminated.
  if (Upper === "Yes" || Upper === "yes") {
    Upper = true;
    return Upper;

    // Condtion for when user specifies that they DO NOT want letters in their password. Input is saved and function is terminated.
  } else if (Upper === "No" || Upper === "no") {
    Upper = false;
    return Upper;

    // Conditions that state if any other answer besides Yes or no is not counnted as valid. Alert is given and function repeats until the user gives a valid response.
  } else if (Upper === null || Upper === ""){
    alert("Please give a valid answer");
    uppercase();
  } else {
    alert("Please give a valid answer");
    uppercase();
  }
  // After valid response is given, function terminates.
  return Upper;
}

// Function that asks the user if they would like any numbers in their password.
function number() {
  Num = prompt("Would you like numbers?")

  // Condition for when the user specifies that they want numbers in their password. Value is stored and function is terminated.
  if (Num === "Yes" || Num == "yes") {
    Num = true;
    return Num;
    // Condtion for when the user specifies that they DO NOT want numbers in their password. Value is stored and function is terminated.
  } else if (Num === "No" || Num === "no") {
    Num = false;
    return Num;

    // Conditions for when the value is not valid. Alert is given and user is prompted to answer the correct input.
  } else if (Num === null || Num === ""){
    alert("Please give a valid answer");
    number();
  } else {
    alert("Please give a valid answer");
    number();
  }

  // Once correct input is given, function is terminated.
  return Num;
}

// Function that asks the user if they want symbols in their password
function symbols() {
  Symb = prompt("Would you like symbols?");

  // Condition for when the user specifies that they do want symbols. Value is stored and function is terminated
  if (Symb === "Yes" || Symb === "yes") {
    Symb = true;
    return Symb;
    // Condition for when the user specifies that they do NOT want symbols. Value is stored and function is terminated
  } else if (Symb === "No" || Symb === "no") {
    Symb = false;
    return Symb;
    // Conditions for when the value is not valid. Alert is given and user is prompted to answer the correct input
  } else if (Symb === null || Symb === ""){
    alert("Please give a valid answer");
    symbols();
  } else {
    alert("Please give a valid answer");
    symbols();
  }
  // Once correct input is given, function is terminated.
  return Symb;
}

// Function that generates the random password after the user specifies the criteria.
function generatePassword() {

  // Calls all the previous functions for the length and criteria
  checkLength();
  console.log(Length);
  uppercase();
  console.log(Upper);
  number();
  console.log(Num);
  symbols();
  console.log(Symb);

  // Initial array that will be concatenated based on the criteria
  var characters = alpha_L;

  // Variable that will store the value of the array as a string
  var pw = "";

  // Condition for all criteria selected
  if (Upper && Num && Symb) {
    characters += alpha_U + numeral + symbolic;

    // Condition for only uppercase and numbers selected
  } else if (Upper && Num){
    characters += alpha_U + numeral;

    // Condition for only uppercase and symbols selected
  } else if (Upper && Symb) {
    characters += alpha_U + symbolic;

    // Condition for only numbers and symbols selected
  } else if (Num && Symb) {
    characters += numeral + symbolic;

    // Condition for only uppercase selected
  } else if (Upper) {
    characters += alpha_U;

    // Condition for only numbers selected
  } else if (Num) {
    characters += numeral ;

    // Condition for only symbols selected
  } else if (Symb) {
    characters += symbolic;

    // Condition for no criteria selected. Default will be lowercase letters
  } else {
    characters === alpha_L;
  }

  // For loop that generates the password based on the length and the criteria and stores it in the pw value
  for (var i = 0; i < Length; i++) {
    pw += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  // Terminates the function after the value for pw is given
  return pw;
  
}

// Function that writes the password to the #password input box
function writePassword() {
  var password = "" ;
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// Original version of code for Password generator

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

