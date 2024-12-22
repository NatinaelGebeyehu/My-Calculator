// $(document).ready(function() {
//     const $input = $('#result');
//     const $buttons = $('button');

//     let currentOperation = null;
//     let firstOperand = null;

//     function appendToInput(character) {
//         if (!isNaN(character)) {
//             $input.val($input.val() + character);
//         } else if (character === '+' || character === '-' || character === '*' || character === '/') {
//             if (firstOperand === null) {
//                 firstOperand = parseFloat($input.val());
//                 $input.val('');
//             } else {
//                 calculate();
//             }
//             currentOperation = character;
//         } else if (character === '=') {
//             calculate();
//         }
//     }

//     function calculate() {
//         const secondOperand = parseFloat($input.val());
//         let result;

//         switch (currentOperation) {
//             case '+':
//                 result = firstOperand + secondOperand;
//                 break;
//             case '-':
//                 result = firstOperand - secondOperand;
//                 break;
//             case '*':
//                 result = firstOperand * secondOperand;
//                 break;
//             case '/':
//                 if (secondOperand === 0) {
//                     result = 'Error: Division by zero';
//                 } else {
//                     result = firstOperand / secondOperand;
//                 }
//                 break;
//             default:
//                 result = 'Invalid operation';
//         }

//         $input.val(result);
//         firstOperand = null;
//         currentOperation = null;
//     }

//     $buttons.click(function() {
//         const character = $(this).text();
//         appendToInput(character);
//     });
// });


$(document).ready(function() {
    $("button").on("click", function() {
        let buttonText = $(this).text();
        let inputField = $("#result");

        if (buttonText === "AC") {
            // Clear the input field
            inputField.val("");
        } else if (buttonText === "DEL") {
            // Delete the last character
            let currentValue = inputField.val();
            inputField.val(currentValue.slice(0, -1));
        } else if (buttonText === "=") {
            // Evaluate the expression
            try {
                let result = eval(inputField.val());
                inputField.val(result); // Display the result
            } catch (e) {
                inputField.val("Error"); // Display error for invalid expressions
            }
        } else {
            // Append the button's value to the input field
            let currentValue = inputField.val();
            inputField.val(currentValue + buttonText);
        }
    });
});










