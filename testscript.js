var generateBtn = document.querySelector("#generate");


// Generate password here
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = window.prompt(
    "How many characters would you like to have? (Choose between 8 and 128)"
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    function generatePassword() {
      var passwordLower = window.confirm("Would you like lowercase letters?");
      var passwordUpper = window.confirm("Would you like uppercase letters?");
      var passwordNumeric = window.confirm("Would you like to add numbers?");
      var passwordSpecial = window.confirm(
        "Would you like special characters?"
      );



      var emptyString = "";
      var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVQYXZ";
      var stringLower = "abcdefghijklmnopqrstuvwxyz";
      var stringNumeric = "0987654321";
      var stringSpecial = '!@#$%^&*()_+={}[]|?/><:;"';


      if (passwordUpper === true) {
        emptyString += stringUpper;
      }else {
        window.alert ("You have denied uppercase letters.")
      }


      if (passwordLower === true) {
        emptyString += stringLower;
      } else {
    window.alert ("You have denied lowercase letters.")
  }

      if (passwordNumeric === true) {
        emptyString += stringNumeric;
      } else {
    window.alert ("You have denied numeric characters.")
  }

      if (passwordSpecial === true) {
        emptyString += stringSpecial;
      } else {
    window.alert ("You have denied special characters.")
  }

      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        password += emptyString.charAt(
          Math.floor(Math.random() * emptyString.length)
        );
      }
      console.log(password)
      passwordText.textContent = password;
      return password;
  } 
  generatePassword ();
} else {
  window.alert("Password must be between 8 and 128 characters.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);