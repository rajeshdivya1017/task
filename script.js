/* 1.	Var-Global scope. It allows five rules:declaration,initialization,reuse,
reintialization and redeclaration.
    Let-Block scope. It allows  declaration and reintialization only
    Const-Block scope.It allows only declaration.
2.	Var – keyword allows redeclaration…because it is global scope
3.	Var and let -keyword allows reintialization.
4.	Const – const keyword does not allow redeclaration and reintialization.
5.	In const the value cannot be changed ..because I we change the value
 means error will occur ..const is used only for one purpose.
6.	Syntax error will occur.
7.	Type error will occur.
8.	We can preffer let and const keyword because they 
are block scope…they avoid error occurs in program.
9.	No ,we can’t declared const without initialization
10.	When writing an modern java script…we should avoid var keyword 
 because it is global scope. It may cause some changes to output.

11.	Output=30
12.	Output=15
13.	Syntax error-because redeclaration are not allowed in let keyword.
14.	Type error-in const we cant reassign the variable value.
15.	Var a=10
Var a =20
Console.log(a):
Output :20
16.	Let a=20
    a=30
console.log(a):
output :30
17.	Const a=10
    a=20====error occur ..because const have only one.(value cannot change)
18.	Let a=30
a=40
console.log(a): in this program we use let keyword instead of var keyword..
where initialization and reintialization occur..
19.	Const a=30in this we use const keyword instead of var keyword in this reintialization 
and redeclaration are not occur
20.	Var a=20
Let a=25
Const a =30
 */



/* task=02 */

/* let username =prompt("enter your name");
alert("Hi"+ username +"welcome to java script training");
console.log("Hi"+ username +"welcome to java script training"); */


/* 
let a=500
console.log(a);
console.warn(a);
console.error(a);
console.clear(a); */



/* let str = "task";
let num = 25;
let boo = true;
let undef ;
let nul = null; 
console.log(typeof str);
console.log(typeof num);
console.log(typeof boo);
console.log(typeof undef);
console.log(typeof nul);  */


/* let a = 20;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); */

/* 
let x = 10;
console.log(++x);  // pre increment
console.log(--x);  // pre decrement
console.log(x++);  // post increment
console.log(x--);  // post decrement */


/* let num = 10;
num +=5;
console.log(num);
num -=2;
console.log(num);
num *=2;
console.log(num);
num /=2;
console.log(num);
num %=3;
console.log(num); */



/* 
let skills = ["HTML","CSS","JAVASCRIPT","REACT"];
console.log(skills[0]);
console.log(skills[1]);
console.log(skills[skills.length-1]);
console.log(skills.length); */


/* let courses = ["HTML","CSS","JAVASCRIPT","REACT"];
console.log("given courses:",courses);
courses.push("node js");
console.log(courses);
courses.pop();
console.log(courses); */


/* let student = {
    name : "Rajesh",
    age : 27,
    course : "java script",
    city : "virudhachalam"
};
console.log("name:",student.name);
console.log("age:",student.age);
console.log("course:",student.course);
console.log("city:",student.city); */


let company = {
    companyName:"stackly",
 trainer:{
        trainerName:"naveen",
        subject:"java script"
    }
};
console.log("company Name:",company.companyName);
console.log("trainer Name:",company.trainer.trainerName);
console.log("trainer subject:",company.trainer.subject);





