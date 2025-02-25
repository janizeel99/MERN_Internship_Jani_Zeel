//Task1
let number=12
if(number > 10){
   console.log("Greater than 10");
}
else{
   console.log("10 or Less");
}



//Task2
let num = 15
if(num % 2 == 0){
   console.log("Even");
}
else{
    console.log("Odd");
}


//Task3
let num1 = 11
if(num1 > 0){
   console.log("Positive");
}
else if(num1 < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}


//Task4
let pass= "admin123"
if(pass == "admin123"){
   console.log("Login Successful");
}
else{
  console.log("Incorrect Password");
}
//Task4 Example2
/*let pass1= "admin12"
if(pass1 == "admin123"){
   console.log("Login Successful");
}
else{
   console.log("Incorrect Password");
}*/


//Task5
let score = 87;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("D");
}


//Task6
let age = 17
if(age >= 18){
  console.log("You Can Vote");
}
else{
  console.log("You Can't Vote");
}


//Task7
let num2 = 20
let num3 = 30
if(num2 < num3){
  console.log("Greater Number is: "+num3);
}
else{
    console.log("Both Are Equal Number"); 
}


//Task8
let year = 2024
if(year % 4 == 0){
  console.log("Leap Year");
}
else{
  console.log("Not a Leap Year");
}


//Task9
let vowel = "Zeel"
if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
  console.log("Vowel");
}
else{
  console.log("Consonant");
}
//Task9 Example2
let vowel1 = "e"
if(vowel1 == "a" || vowel1 == "e" || vowel1 == "i" || vowel1 == "o" || vowel1 == "u"){
    console.log("vowel1");
}
else{
    console.log("Consonant");
}


//Task10
let totalamount = 150
let discount = totalamount * 10/100
let final_amount = totalamount - discount
if(totalamount > 100){
  console.log("Final Amount is: "+final_amount);
}
else{
    console.log("No Discount");
}

//Switch 
let day = "Monday"

switch (day) {
    case "Monday":
         console.log("Today is Monday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        break;
           
    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    case "Thursday":
        console.log("Today is Thursday");
        break;

    case "Friday":
        console.log("Today is Friday");
        break;

    default:
        console.log("Weekend");
        break;
}

//example 2
let mark = 65
let grade;

switch (true) {
    case mark >= 90:
        grade = "A";
        break;
    case mark >= 80:
        grade = "B";
        break;
    case mark >= 70:
        grade = "C";
        break;
    case mark >= 60:
        grade = "D";
        break;
    case mark >= 40:
        grade = "E";
        break;    
                    
    default:
        grade = "F";
        break;
}
console.log("Grade is: "+grade);

