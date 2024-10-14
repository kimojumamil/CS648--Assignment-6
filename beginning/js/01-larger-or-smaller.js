var num1;
var num2;

num1 = window.prompt("Enter first integer");
num1 = parseInt(num1, 10);

num2 = window.prompt("Enter first integer");
num2 = parseInt(num2, 10);

if(num1 >= num2){
    document.write("The larger number was: " + String(num1) + "<br>");
}
else{
    document.write("The larger number was: " + String(num2) + "<br>");
}