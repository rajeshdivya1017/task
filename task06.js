//TASK=01[FOR EACH PRACTICE]

/* 
let subjects = ["Maths", "Science", "English", "History"];
let result = subjects.forEach((subject, index) => {
  console.log(`Subject ${index + 1}: ${subject}`);
}); 
console.log("Result:", result); */

//EXPLANATION
//FOR EACH()==because it designed to excecute a function for each element,not to create or return new value



//TASK=02[MAP()PRACTICE]


/* let prices = [100, 200, 300, 400];
let newPrices = prices.map(function(price) {
    return price + price * 0.10;
});
console.log(newPrices); */


//TASK=03[FILTER()PRACTICE]


/* let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
];  
let passedStudents = students.filter(student => student.marks > 50);
console.log(passedStudents); */


//TASK=04[FIND()PRACTICE]

/* let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
  ];
  let firstPassedStudent = students.find(student => student.marks > 50);
console.log(firstPassedStudent); */


//Explanation

//find() returns only the first match in the given data
//filter() returns all matches in the given data





//TASK=05[REDUCE()PRACTICE]


/* let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
];

let totalPrice = cart.reduce((sum, curr) => {
  return sum + curr.price + curr.price * 0.05;
}, 0);

console.log(totalPrice); */




//TASK=06[SOME()PRACTICE]


/* let numbers = [1, 3, 5, 7, 8];
let Even = numbers.some(num => num % 2 === 0);
console.log(Even);  */

//Explanation
//some()is works like an OR operator,if true occurs in any one the output will be true




//TASK=07[EVERY()PRACTICE]


/* let ages = [22,25,19,30]
let aboveages = ages.every(ages => ages<18);
console.log(aboveages); */

//Expansion
//every()is works like an AND operator,if any one false occur the output will be false



//TASK=08[SORT()PRACTICE]


/* let salaries = [50000,10000,70000,30000]
let ascending = salaries.sort((a,b)=>{
    return a-b
})
console.log(ascending); */

/* let salaries1 = [50000,10000,70000,30000]
let desending = salaries1.sort((a,b)=>{
    return b-a
})
console.log(desending); */

//normal sorting fails with numbers ,because the default sort()converts numbers to string.



//TASK=09[ZERO CONVERSION METHOD]


/* let arr = [10,20,30,40]
let stringarray = arr.toString()
console.log(typeof(stringarray)); */

/* let arr = [10,20,30,40]
let joinarray = arr.join("-")
console.log(joinarray); */




//TASK=10[CHARAT(),CHARCODEAT()]

/* 
let word = "Developer"
let charval = word.charAt(4)
console.log(charval); */

/* 
let word = "Developer"
let charcode = word.charCodeAt(4)
console.log(charcode); */



//TASK=11[SLICE()]

/* 
let company = "StacklyCompany"
let slicecom = company.slice(7)
console.log(slicecom); */




//TASK=12[CASE CONVERSION]

/* let userInput = "javaScript"
let upper = userInput.toUpperCase()
console.log(upper); */

/* 
let userInput1 = "javaScript"
let lower = userInput1.toLowerCase()
console.log(lower); */


//TASK=13[TRIM()]

/* let email = "  naveen@gmail.com  "
let trimval = email.trim()                      //email.trim start()...//email.trim end()
console.log(trimval); */


//TASK=14[INCLUDES()]

/* let message = "Welcome to javascript Training"
let includesval = message.includes("javascript")
console.log(includesval) */


//TASK=15[SPLIT()]

/* let movie = "spider-man-no-way-home"
let splitval = movie.split("-")
console.log(splitval); */



//TASK=16[INDEXOF(),LASTINDEXOF()]

/* let text = "progamming"
let indexval = text.indexOf(m)
console.log(indexval); */

/* let text1 = "progamming"
let indexval1 = text1.lastIndexOf("m")
console.log(indexval1); */


//TASK=17[REPLACE()]

/* let tech = "I Love python"
let replaceval = tech.replace("python","javascript")
console.log(replaceval); */


//TASK=18[STARTWITH() AND ENDWITH()]
/* 
let filename = "report.pdf"
let startval = filename.startsWith("report")
console.log(startval);


let filename1 = "report.pdf"
let endval1 = filename.endsWith(".pdf")
console.log(endval1); */


//TASK=19[REPEAT()]


/* let star = "*"
let repeatval = star.repeat(10)
console.log(repeatval); */


//TASK=20[FINAL TEAM CHALLENGE]
/* 
let employees = [
{ name: "Naveen" , salary: 50000 } ,
{ name: "Arun" , salary: 30000} ,
{ name: "kiran" , salary: 70000} , 
]
let upperCaseNames = employees.map(emp => emp.name.toUpperCase());
console.log(upperCaseNames); 
/*  let highEarners = employees.filter(emp => emp.salary > 40000);
console.log(highEarners); */
 /* let firstHighSalary = employees.find(emp => emp.salary > 60000);
console.log(firstHighSalary); */
 /* let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total Salary:", totalSalary); */
/*  let sortedSalaries = employees.slice().sort((a, b) => b.salary - a.salary);
console.log(sortedSalaries); */  
 



