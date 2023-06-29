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
