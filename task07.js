//SECTION===01(DATE OBJECT TASK)
//TASK==01(CUSTOM DIGITAL CLOCK)

/*function digitalClock() {
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log("Current Time: " + hours + " : " + minutes + " : " + seconds);
}

setInterval(digitalClock, 1000);
digitalClock(); */



//TASK==02(FIND CURRENT DAY NAME)

/* let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = new Date();
let dayname = days[today.getDay()];
console.log("Today is "+ dayname); */



//TASK==03(AGE CALCULATOR)

/* 
let birthyear = prompt("Enter your date of year");
let currentyear = new Date().getFullYear();
let age = currentyear - birthyear;
console.log("Your age is "+age); */



//TASK==04(CREATE SPECIFIC YEAR,DATE AND TIME)

/* let date = new Date();             //to find the specific date,year and time means we use the set()key word fun
date.setFullYear(2020);
date.setMonth(7);                 //In month we have count by starting index num of 0...eg..jan=0,feb=1....dec=11 like this
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
console.log(date.toLocaleString()); */



//SECTION==02(SETTIOMEOUT AND SETINTERVAL)

//TASK==05(SETTIMEOUT)

/* //Set Timeout function
setTimeout(()=>{
    console.log("Welcome Naveen")        //In this we make some delay message in some fraction seconds like 3 sec
},3000)                                 //3000 ms = 3 sec
 */



//TASK==06(STOPINTERVAL)

/* let count = 1;
let countinterval = setInterval(()=>{
    console.log(count);
    count ++ ;                                      //In this we are use itertion fun,if the condition satistified then print 
    if (count>5){                                   //stopped
        clearInterval(countinterval);
        console.log("Stopped");
    }
}) */




//SECTION===03(PROMISE PRACTICE)
//TASK==07(SIMPLE PROMISE)

/* 
let number = prompt("Enter the Number");   
let checkNumber = new Promise((resolve, reject) => {

    if (number > 10) {
        resolve("Valid number");
    } else {
        reject("Invalid number");
    }

});

checkNumber
    .then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() =>{
        console.log("verification completed");
    }); */



//SECTION===04(FETCH API)
//TASK==08(FETCH PRODUCT PRICE)

/* 
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      console.log("Product: " + product.title);
      console.log("Price: " + product.price);
      console.log("----------------------");
    });
  })
  .catch(error => {
    console.log("Error:", error);
  }); */



//SECTION===05(EXECUTION ORDER TASK)
//TASK==09(EXECUTION TASK)

/* function one (){
    console.log("one");
}
function two(){
    console.log("Two");                      //OUTPUT
}                                              // one
function three(){                              //Three
    console.log("Three");                      //Two
}
one();
setTimeout(two,0);
three();

//EXPLANATION
*One 
        It goes into the call stack function so it executes imediately  
*Two
         we give settimeout for 0 sec it cant executes imediately and moves into
         web api function and perform some function 
*Three
         where as three perform call stack function so it executes imediately
         before the two perform Web api function */