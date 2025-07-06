const selectBox = document.getElementById("input");
const passSize = 10;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890"
let spChar = "@#$%^&*()~_?><";
let randomPass = upperCase + lowerCase + num + spChar;

function getPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += spChar[Math.floor(Math.random() * spChar.length)];

    while(passSize > password.length) {
        password += randomPass[Math.floor(Math.random() * randomPass.length)];
    }
    selectBox.value = password;
}

function copyPass() {
    selectBox.select();
    document.execCommand("copy");
}