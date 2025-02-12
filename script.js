function greet(name = "Guest") {
    return "Hello " + name;
}

console.log(greet("Balraj"));
console.log(greet());


function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 7));


let x = 10;

function changeValue() {
    let x = 20; 
    console.log("Inside function:", x);
}

console.log("Before calling function:", x);
changeValue();
console.log("After calling function:", x);


function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log("Count:", count);
    };
}

const increment = outerFunction();
increment();
increment();
increment();
