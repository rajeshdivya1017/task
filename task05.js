// employee merge system
/* 
let empBasic = {
    name:"Naveen",
    role:"Trainee",
    salary:20000
}
let empPromotion = {
    role:"Developer",
    bonus:10000
}
                                                                                    //requirments
let empDetail={...empBasic,...empPromotion,salary:40000,experience:"2 years"}
console.log(empDetail); */


//TASK=02.SHOPPING CART(SPRED+ARRAY)
/* 
let cart1 = ["shoes","shirt"]
let cart2 = ["watch","cap"]
let newcart = ["Socks",...cart1,...cart2,"bag"]                                 //all requirments
console.log(newcart); */


//TASK=03.REST OPERATOR SALARY CALCULATOR
/* 
function calculatetotalsalry(basesalary,...bonuses){
    let bonus =[30000,2000,3000,5000]                                       //add all bonus value and return total salary
    let[a1,a2,a3,a4]=bonus
    console.log("Total salary:",a1+a2+a3+a4);
}
calculatetotalsalry() */


//TASK=04.ADVANCED DESTRUCTURING
/* 
let student = {
    name:"Ragul",
    marks:{maths:90,science:85,english:88}
}
//recquirements:
let n1=student.name;
let marks1=student.marks.maths;                                             //destructre name ,maths marks and science marks
let marks2=student.marks.science;
let marks3=student.marks.english;
console.log(`Rahul scored ${marks1} in maths and ${marks2} in science`); */

//TASK=05.ARRAY MANUPLATION
/* 
let numbers = [10,20,30,40,50]
numbers.splice(2,1,25)                          //splice and adding num 25
console.log(numbers);
numbers.reverse()                               //reverse function
console.log(numbers);
let num=numbers.includes(50);                   //check the num 50
console.log(num);

console.log("Final array:",numbers); */


//TASK=06.FLATTEN DATA
/*  
let apiData = [1,2,[3,4,[5,6,[7,8]]]]
    let flatten=apiData.flat(Infinity)                  //convert into single array and output
    console.log("Single array:",flatten); 
    let index=flatten.indexOf(6);                       //index of 6
    console.log("Index of 6 is:",index); */


//TASK=07.SORTING PROBLEMS
/* 
 let prices = [100, 5, 25, 300, 45]
    let asc = [...prices].sort((a, b) => a - b);                //a and b variable denotes comparing of these 2 values
    let desc = [...prices].sort((a, b) => b - a);

    console.log("Ascending:", asc);
    console.log("Descending:", desc); */


//TASK=08.BONUS HARD TASK
/* 
let users = [
        {name: "A", salary: 20000},
        {name: "B", salary: 40000},
        {name: "C", salary: 30000}
        ]
       let [u1, u2, u3] = users;                                                                                                
       let updatedsalary = [{ ...u1, salary: u1.salary + 5000 },{ ...u2, salary: u2.salary + 5000 },
                            { ...u3, salary: u3.salary + 5000 }];                   
        console.log("Updated salary:",updatedsalary);                   //every salary increse with 5000 and new salary updted


        updatedsalary.sort((a, b) => b.salary - a.salary);
                            let newsalary=updatedsalary;                    //desending order of updated salary
                            console.log("Sorted salary:",newsalary); */


