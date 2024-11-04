
let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

// Initialize an empty string to hold the input values as the user types
let string = "";

// Convert the NodeList of buttons into an array for easier manipulation
let arr = Array.from(buttons);

// Iterate over each button in the array
arr.forEach(button => {
    
    button.addEventListener('click', (e) => {
        // If the button's innerHTML is '=', evaluate the string as a mathematical expression
        if (e.target.innerHTML == '=') {
            string = eval(string); 
            input.value = string;  
        }
        // If the button's innerHTML is 'AC', clear the input and reset the string
        else if (e.target.innerHTML == 'AC') {
            string = "";          
            input.value = string; 
        }
        // If the button's innerHTML is 'DEL', remove the last character from the string
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string; 
        }
        // For any other button (numbers and operators), add its content to the string
        else {
            string += e.target.innerHTML; 
            input.value = string;        
        }
    });
});
