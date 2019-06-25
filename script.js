console.log('test');

let userInput = document.getElementById("name");
let submit = document.getElementById("submit");
let itemGet = sessionStorage.getItem("name");
let username = document.getElementById("userSaid");
let click = submit.addEventListener("click", enter);
userInput.value = sessionStorage.getItem("name");
// let store = sessionStorage.setItem("name", userInput.value);
// let name = userInput.value;
// console.log(name);
username.innerText = sessionStorage.getItem("name");
console.log(itemGet);
function enter() {
    sessionStorage.setItem("name", userInput.value);
  username.innerText = sessionStorage.getItem("name");
}
// function enter() {
//   let store = sessionStorage.setItem("name", userInput.value);
//   if (userInput.value == undefined) {
//     username.innerText = sessionStorage.getItem("name");
//   }
//   else {
//     username.innerText = sessionStorage.getItem("name");
//   }
// }
console.log(sessionStorage);
