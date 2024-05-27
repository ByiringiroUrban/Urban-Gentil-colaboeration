//  IF STATEMENT 

 //1  let age = 10;
//  if(age >= 18){
//     console.log("you are old enough to drive");
// }else{
//     console.log("you are not enough to drive");
// }


//2 let time = 14;
// if(time <= 12){
//     console.log("good morning");
// }else{
//     console.log("good afternoon");
// }

//3 let isStudent = false;
// if(isStudent){
//     console.log("you are a student");
// }else{
//     console.log("you are not a student");
// }

// let age = 23;
// let hasLicence = true;
// if(age >= 18){
//     console.log("you are enough to drive");
//     if(hasLicence){
//         console.log("you have licence to drive");
//     }else{
//         console.log("you have NOT licence to drive");
//     }
// }else{
//     console.log("you are NOT enough to drive");
// }

// let age = 20;
// if(age >= 100){
// console.log("you are TOO old to enter");
// }else if(age >= 18){
//     console.log("you are old enough to enter");
// }else if(age < 0){
//     console.log("you can't be born");
// }else if(age == 0){
//     console.log("you can't enter you well just born");
// }else{
//     console,log("you are NOT enough to enter");
// }



// let age = 21;
// let message = age >= 18 ? "you are adult": "you are minor";
// console.log(message);

// let time = 13;
// let value = time <= 12? "good morning": "good afternoon";
// console.log(value);

// let isStudent = false;
// let message = isStudent? "you are a student": "you are Not a student";
// console.log(message);

// let purchaseAmount = 100;
// let discount = purchaseAmount >= 100? 10 : 0;
// console.log(`your total is  $${purchaseAmount -  purchaseAmount * (discount) /100}`);


// let day ="urban";
// switch(day){
// case 1:
// console.log("it is Mondoy");
// break;
// case 2:
// console.log("it is Tuesday");
// break;
// case 3:
// console.log("it is Wednesday");
// break;
// case 4:
// console.log("it is Thursday");
// break;
// case 5:
// console.log("it is Friday");
// break;
// case 6:
// console.log("it is Saturday");
// break;
// case 7:
// console.log("it is Sunday");
// break;
//   default:
//     console.log(`${day} is not a day`);
// }


// let testerSCore = 100;
// let letterGrade; 

// switch(true){
// case testerSCore >= 90:
// letterGrade = "A";
// break;
// case testerSCore >= 80:
// letterGrade = "B";
// break;
// case testerSCore >= 70:
// letterGrade = "C";
// break;
// case testerSCore >= 60:
// letterGrade = "D";
// break;
// case testerSCore >= 50:
// letterGrade = "E";
// break;
// default:
//     letterGrade = "F";
//  }
//  console.log(letterGrade);


// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mySubmit.onclick = function(){
//     age = myText.Value;
//     age = Number(age);
// if(age >= 100){
//     resultElement.textContent = `you are TOO old to enter in bar.`;
// } else if(age >= 18 ){
//     resultElement.textContent = `you are allowed to enter in bar.`;
// }else if (age == 0 ){
//     resultElement.textContent = `you are just born. you are kid.`;
// }else if( age < 0){
//     resultElement.textContent = `your age can't be bellow 0.`;
// } else{
//     resultElement.textContent = `you are allowed to enter in bar.`;
// }
// }

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");


// mySubmit.onclick = function(){
//     if(myCheckBox.checked){
//         subResult.textContent = `You are subscribed.`;
//     }else{
//         subResult.textContent = `You are NOT subscribed.`;
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Mtn Mobile Money.`;
//     }else if(mastercardBtn.checked){
//         paymentResult.textContent = `You are paying with Tigo Cash.`;
//     }else if ( paypalBtn.checked){
//         paymentResult.textContent = `You are paying with Airtel Money.`;
//     }else{
//         paymentResult.textContent = `You must select Payment Type.`;
//     }
// }



// let age = 21;
// let message = age >= 18? "you are adult" : "you are a minor";
// console.log(message);

// let time = 14;
// let value = time <= 12? "good morning" : "good atfernoon";
// console.log(value);

// let purchaseAmount = 1290;
// let discount = purchaseAmount >= 100? 10 : 0;
// console.log(`your total is $${purchaseAmount - purchaseAmount * (discount) / 100}`)




// let day = 7;
// switch(day){
// case 1 : 
// console.log("it is monday");
// break;
// case 2 :
// console.log("it is tuesday");
// break;
// case 3:
// console.log("it is wednesday");
// break;
// case 4: 
// console.log("it is thursday");
// break;
// case 5:
// console.log("it is friday");
// break;
// case 6:
// console.log("it is saturday");
// break;
// case 7 :
// console.log("it is sunday");
// break;
// }




// let testerSCore = 100;
// let letterGrade;
// switch(true){
// case testerSCore >= 90:
// letterGrade = "A";
// break;
// case testerSCore >= 80:
// letterGrade = "B";
// break;
// case testerSCore >= 70:
// letterGrade = "c";
// break;
// case testerSCore >= 60:
// letterGrade = "D";
// break;
// default:
// letterGrade = "F";  
// }
// console.log(letterGrade)




// let userName = window.prompt("enter your username:")
// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;

// console.log(userName);

// let userName = window.prompt("enter your username:");
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);

// let temp = -100;
// if(temp > 0 && temp <= 30){
//     console.log("the whether is GOD");
// }else{
//     console.log("whether is BAD");
// }


// var num = 0;    
// function myFunction(array){
//     for(let i = 0; i < array.length; i++){

//       num += array[i];
//     }
//     return num
// }
// let value = myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(value);

function myFunction(age, name){
if(age >= 30){
    console.log(`hello ${name} you are OLD enough to racing`)
}else if(age >= 18){
    console.log(`hello ${name} you are allowed to racing`)
}else {
    console.log(`you are NOT allowed to racing`)
}
}
let result = myFunction(23, "urban")

