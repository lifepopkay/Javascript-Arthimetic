
let firstnumber = prompt("First Number");
let secondnumber = prompt("Second Number");
let operation = prompt("Enter operator(+,-,/,*");

if (isNaN(firstnumber) || isNaN(secondnumber)) {
    alert("please input number!")
    
}

switch (operation) {
    case "+":
        alert( firstnumber + secondnumber)
        break;
    case "-":
        alert( firstnumber - secondnumber)
        break;
    case  "/":
        alert( firstnumber / secondnumber)
        break;
    case  "*":
        alert( firstnumber * secondnumber)
        break;
    default:
        alert("wrong input")

}




