// Random Password Generator
// Variables
const passwordLength = 12;
const includeUppercase = true;
const includeSymbols = true;

// Default allowedChars
let allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";

// Generate Password
function generatePassword(length, includeUppercase, includeSymbols) {
  // Check within normal length
  let password = "";
  if (length >= 6) {
    if (includeUppercase) {
      allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeSymbols) {
      allowedChars += "~!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password = password + allowedChars[randomIndex];
    }
    console.log(password);
  } else {
    console.log("Password must be at least 6 numbers or characters");
  }
}
