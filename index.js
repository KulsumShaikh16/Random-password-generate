const passwordbox=document.getElementById('password');
const length= 15;


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*~?><|.,;";

const allChar= upperCase + lowerCase + number + symbol;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];
    
    while (length > password.length){
        password += allChar[Math.floor(Math.random()* allChar.length)]; 
    }
    passwordbox.value=password;
}

function copyPassword(){
    passwordbox.select();
    document.execCommand('copy');

}

function copied(){
    alert("copied");
}

console.log(copied);

