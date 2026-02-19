
//select for input,order list and button
const input = document.querySelector(".task-input");
const button = document.querySelector(".add-button");
const ol = document.querySelector(".task-list");

//Even handling function
button.addEventListener("click",function(){

//get the input value
    const taskText =input.value;

//check for wheather the input value is empty or not
    if(taskText ===""){
        aleart("please enter the task");
        return;
    }

//create a new list item for function
    const li = document.createElement("li");
    li.innerText=taskText;

//apply some style using style properties
    li.style.color="black";
    li.style.fontSize="20px"
    li.style.fontWeight="bold";

//add class to setattreibutes fun
    li.setAttribute("class","task-item");

//add listitem to the order list
    ol.append(li);

 //remove the task when it was clicked
    li.addEventListener("click",function(){
        li.remove();
    })

//clear the input field
    input.value="";
});


