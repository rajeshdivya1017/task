
//SECTION=01.REAL TIME FUNCTION LOGIC
//01.PAYROLL SYSTEM

/* function calculatesalary(basicsalary,bonuspercentage)
{
    let bonus = basicsalary * (bonuspercentage/100);       // formula
    let grosssalary = basicsalary + bonus;
    let tax = grosssalary * 0.05;
    let takehomesalary = grosssalary - tax;
    console.log("basic salary:",basicsalary);
    console.log("bonus:",bonus);
    console.log("tax(5%):",tax);
    console.log("takehomesalary:",takehomesalary);
    return takehomesalary;
}
calculatesalary(30000,10); */



//02.STUDENT RESULT SYSTEM
/* 
function generateresult(name,markArray)
{
    let total = markArray.reduce((sum,mark)=> sum + mark,0);         //arrow function
    let average = total / markArray.lenght;
    let grade;
    if(average>=80)grade = "A";
    else if(average>=60)grade = "B";
    else if(average>=40)grade = "C";
    else grade = "Fail";
    return {
        Name : name,
        Total : total,
        Average : average,
        Grade : grade
    };
}
console.log(generateresult("divya",[78,85,96,73])); */



 

//SECTION=02.SCOPE AND HOSTING
//03.DEBUG THIS CODE

/* function demo()
{
    if(true){
        var a = 10;
        let b = 20;
    }
    console.log(a);                          //10
    console.log(b);                          //referance error b is not definned
}
demo();

why=== var is global scoped,so its accesable
       let is blocked scope,before it calling a funtion its cannot be accesable 

 function demo()
{
    let a,b;
    if(true){
        a=10;
        b=20;
    }
    console.log(a);
    console.log(b);
}
demo(); */ 


//04.HOISTING ANALYSIS
/* 
console.log(x);
var x=100;                                          //undefined
       var is a global scope it accept the print condition before it assign or initializing the value.


console.log(y);
let y=200;                                      //referance error:cannot acces "y"before intialization
       let is an block scope it cant accept the condition of before instaling the values */





//SECTION=03 CALLBACK AND HIGH ORDER FUNCTION
//05.ORDER PROCESSING SYSTEM
       /*  
function invoicegenerate(orderId)
{
    console.log("invoice number for orders:",orderId);        //invoicegenerate fun is used for callback purpose
}
function processorder(orderId,callback)
{
    console.log("order processed");                           //processorder is an highorder fun...and callback fun is called
    callback(orderId);                                         // on this process then the output is generated
}
processorder(01,invoicegenerate); */ 


//06.BANK TRANSACTION SYSTEM

/* 
function sendsms(message)
{
    console.log("SMS:",message);
}
function transaction(amount,type,callback)                   //based on  using callback function method
{
    let balance =5000;
    if(type==="deposit")
    {
        balance +=amount;
    }
    else if(type==="withdraw")
    {
        balance-=amount;
    }
    callback("transaction successful.balance:"+balance);
}
transaction(1000,"withdraw",sendsms); */



//SECTION=04 CURRYING
//07.DYNAMIC PRICE BUILDERS
/* 
function pricebuilder(baseprice){
    return function(discount){
        return function(tax){
            let discountamount = baseprice *(discount/100);           //formula
            let discountprice = baseprice-discountamount;             //formula
            let taxamount =discountprice *(tax/100);                  //formula
            let finalprice = discountprice + taxamount;               //formula
            console.log("Base price:",baseprice);
            console.log("Discount price:",discountprice);
            console.log("final price:",finalprice);
            return finalprice;                                         //currying means structure..we always use uncurring 
        };                                                              //for our convinient...
    };
}
pricebuilder(2000)(15)(18); */



//SECTION=05 IIFE(SECURITY+ENCAPSULATION)
//08.SECURE CODE MODULE

/* const company = (function()                                             
{                                                                    
    let companycode = "RAJ123";
        function companystatus(){
            console.log("company Active")
        }
        
            return{
                companystatus
        };
    
})();
company.companystatus(); */



//SECTION=06 GENERATOR
//09.UNIQUE ORDER ID GENERATOR
/* 
function orderidgenerator(){
    let count = 1000;
    return function(){
        count++;
        return "ORD"+count;
    }
}
let generator = orderidgenerator();
console.log(generator());
console.log(generator());
console.log(generator()); */


//10.COUPOUN SPIN SYSTEM

/* function* spiningprize()
{
    yield"10% OFF";
    yield"20% OFF";
    yield"50% OFF";
    yield"NO LUCK";
    yield"JACKPOT";
}
let spin = spiningprize();
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value); */



//MINI PROJECT
//MINI E-COMMERCE FLOW

/*const AppConfig = (function () {
    const taxRate = 18;     // private
    const currency = "₹";  // private

    return {
        getTaxRate() {
            return taxRate;
        },
        getCurrency() {
            return currency;
        }
    };
})();

const Cart = (function () {
    let cart = [];

    function addToCart(product, price) {
        cart.push({ product, price });
        console.log(`${product} added to cart - ${price}`);
    }

    function calculateTotal() {
        
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        console.log("Cart Total:", total);
        return total;
    }

    return {
        addToCart,
        calculateTotal
    };
})();


const applyDiscount = total => discount => {
    let discountAmount = (total * discount) / 100;
    return total - discountAmount;
};


function* couponGenerator() {
    const coupons = ["10% OFF", "20% OFF", "50% OFF", "No Luck", "Jackpot"];
    let index = 0;

    while (true) {
        yield coupons[index];
        index = (index + 1) % coupons.length;
    }
}

const couponSpin = couponGenerator();

function processPayment(amount, callback) {
    console.log("Processing Payment...");
    setTimeout(() => {
        console.log("Payment Successful");
        callback(amount);
    }, 1000);
}

function paymentReceipt(amount) {
    console.log("Receipt Generated");
    console.log("Paid Amount:", AppConfig.getCurrency() + amount);
}


Cart.addToCart("laptop", 55000);
Cart.addToCart("cpu", 1000);

let total = Cart.calculateTotal();

let discountedAmount = applyDiscount(total)(10);
console.log("After Discount:", discountedAmount);

let tax = (discountedAmount * AppConfig.getTaxRate()) / 100;
let finalAmount1 = discountedAmount + tax;
console.log("Final Amount with Tax:", finalAmount1);

console.log("Coupon Spin Result:", couponSpin.next().value);


processPayment(finalAmount1, paymentReceipt);*/





//CONCEPT QUESTIONS

/* 
function declaration===function is defined using function keyword within a name.
                    syntax==function add(a,b){}
                    function name is important

function expression===function is assigned to a variable
                    syntax===const add = function(a,b){}
                    function name is optional */


/* highorderfunction====A high order function is a function that operates on another function..ie..it can be callback */


/* 
Real time example of generator
 
function orderidgenerator(){
    let count = 1000;
    return function(){
        count++;
        return "ORD"+count;
    }
}
let generator = orderidgenerator();
console.log(generator());
console.log(generator());
console.log(generator());  */



/* IIFE==(Immediately Invoked Function Expression)
*avoid global variable pollution
*create private vriables
*immediate execution
*data security is maintained */


/* var is a function scope which allows reinitialization and redeclaration.
let is a block scope it doesnot allows redeclaration. And 
const is also a block scope but it doesnot allows for both redeclaration and reassigning the values. */











