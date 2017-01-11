Take the following two variables:

var myAge = 45;
//Write a conditional statement that will test if an age is over 100. If it is
//set a variable isOld to true otherwise set it to false.

var isOld;

if (myAge > 35) {
  isOld = true;
} else {
  isOld = false;
}
console.log(isOld);
}



Each of the following blocks of JavaScript contains errors. Take a look at each and do the following:

Identify which line the error occurs on.
Explain the cause of the error
Fix the error, so the code produces the desired response.

var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastname;

console.log(fullName); // Julia Roberts

//Answer:
//Error is in line 9.  lastname is missing an uppercase 'N'.
//Also, line 9 doesn't take into account the space between the first and last name.
//if we wanted it to look as expected, it should read:
var fullName = firstName + " " + lastName;
console.log(fullName); // Julia Roberts


var yearBorn = 1975;
var currentYear = 2016;
Var age = currentYear - yearBorn;

console.log(age); // 41

//Answer:
//Line 23, Var should be all lowercase.
