//Control Flow
// var age = parseInt(prompt("Enter your age:"));
// if (age < 18) {
//   console.log("You are a minor.");
//   document.getElementById("demo").innerHTML="You are a minor."
// } else if (age >= 18 &amp;&amp; age <= 65) {
//   console.log("You are an adult.");
//   document.getElementById("demo").innerHTML="You are an adult."
// } else {
//   console.log("You are a senior citizen.");
//   document.getElementById("demo").innerHTML="You are a senior citizen."
// }

//Task 4: Functions
function findMinMaxSalary(salaries) {

     var minSalary = salaries[0];
     var maxSalary = salaries[0];
    
    for (var i = 1; i < salaries.length; i++) {
    if (salaries[i] < minSalary) {
        minSalary = salaries[i];
    }
     if (salaries[i] > maxSalary) {
     maxSalary = salaries[i];
     }
     }
       
     return {
    min: minSalary,
     max: maxSalary
    };
    }
    var salaries = [50000, 60000, 45000, 70000, 55000];
    var result1 = findMinMaxSalary(salaries);
    console.log("Minimum Salary:", result1.min);
    console.log("Maximum Salary:", result1.max);
