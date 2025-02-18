//Without curry function
// Object containing user data

userObj = {
    name: "Ajay",
    age: "28",
};

// Function to get user information based on the key
function userInfo(obj, key) {
    return obj[key];
}

// Get the name of the user from the userObj
const result = userInfo(userObj, "name");
console.log(result); // Output: Ajay
  
  