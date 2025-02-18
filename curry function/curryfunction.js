//With currying function
// Object containing user data
userObj = {
  name: "Ajay",
  age: "28",
};

// Currying function to get user information
function userInfo(obj) {
  // Return a function that takes a key and returns the corresponding value from the object
  return function (userInfo) {
    return obj[userInfo];
  };
}

// Create aS curried function with userObj
const result = userInfo(userObj);

// Log the name of the user
console.log(`Name of user is: ${result("name")}`);

// Log the age of the user
console.log(`Age of user is: ${result("age")}`);

