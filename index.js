//test
console.log(isValidPassword("user", "admin12356!")); // true
console.log(isValidPassword("user", "shortpw")); // false
console.log(isValidPassword("user", "no space123")); // false
console.log(isValidPassword("user", "username123!")); // false
console.log(isValidPassword("user", "UserName123!")); // false

function isValidPassword(username, password) {
  // User name and password converted to lowercase
  let lowerUsername = username.toLowerCase();
  let lowerPassword = password.toLowerCase();

  //password length validation
  if (password.length < 8) {
    return false;
  }

  //password includes space validation
  if (password.includes(" ")) {
    return false;
  }

  //password contains username validation
  if (lowerPassword.includes(lowerUsername)) {
    return false;
  }

  //password meets all the conditions
  return true;
}
