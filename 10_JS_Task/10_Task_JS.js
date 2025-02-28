//Task1
let age = 18;
let name = "Zeel";
console.log("age" + ":" + age);
console.log("Name" + ":" + name);

//Task2
let fullname = "Tata Harrier";
let Model_Year = 2025;
let color = true;
let engine;
let airbag = null;
console.log(typeof fullname);
console.log(typeof Model_Year);
console.log(typeof color);
console.log(typeof engine);
console.log(typeof speed);

//Task3
let num = 15
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}


//Task4
let age1 = 17
if (age1 >= 18) {
    console.log("You Can Vote");
}
else if (age1 == 17) {
    console.log("You Can Vote Next Year");

}
else {
    console.log("You Can't Vote");
}



//Task5
let text = "";
for (let i = 1; i <= 10; i++) {
    text += "The number is " + i + "<br>";
}
document.getElementById("z1").innerHTML = text;



//Task6
let day = "Sunday";

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


//Task7
let text1 = "";
let j = 1;
while (j <= 5) {
    text1 += "The number is " + j + "<br>";
    j++;
}
document.getElementById("z4").innerHTML = text1;



//Task8
const person = new Object();
person.name = "Jani Zeel";
person.age = 24;
person.city = "Ahmedabad";
document.getElementById("z5").innerHTML = person.name + " is " + person.age + " years old." + " He lives in " + person.city + ".";


//Task9
//Adding new properties country to person object from task8 objects
person.country = "India";
document.getElementById("z5").innerHTML = person.name + " is " + person.age + " years old." + " He lives in " + person.city + " " + person.country + ".";


//Task10
//write a program that prints all key-value pairs of an object using a 'for...in' loop
let text2 = "";
for (let x in person) {
    text2 += person[x] + " ";
};
document.getElementById("z6").innerHTML = text2;
//second style to print  key and values with object values
const person1 = Object.values(person);
document.getElementById("z6").innerHTML = person1;

