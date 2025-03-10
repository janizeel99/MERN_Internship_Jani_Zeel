const display = document.querySelector(".dis");
const buttons = document.querySelectorAll("button");
const specialCha = ["%","+","-","*","/","="];
let output = ""


//define function to calculate based on button clicked.
const calculate = (btnvalue) => {
    if(btnvalue === "=" && output !== ""){
         //If output has %, replace with '/100' before evuluating.
         output = eval(output.replace("%","/100"));
    }
    else if(btnvalue === "AC"){
         output ="" 
    }
    else if(btnvalue === "DEL"){
        //if del button is clicked remove the last character from the output.
        output = output.toString().slice(0, -1);
    }
    else{
        //if output is empty and button is specialchar then return
        if (output === "" && specialCha.includes(btnvalue)) return; 
            output += btnvalue;
        }
        display.value = output;
    }
      



//add event listener to buttons, call calculate() on click.
buttons.forEach((buttons) => {
    //Button Click Listener Calls Calculate() with dataset value as argument
    buttons.addEventListener("click", (e) => calculate(e.target.dataset.value));
});  
