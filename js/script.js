// business Logic

function clearScreen() {
  const inputNumber = document.getElementById("input-number");
  const output = document.getElementById("output");

  // this clear output
  output.innerHTML = '';
  inputNumber.value = '';
}

function handleSubmit() {
  const inputNumber = document.getElementById('input-number');
  const output = document.getElementById('output');
  output.innerHTML = '';
  
  const number = parseInt(inputNumber.value);
  const numbers = Array.from(Array(number + 1).keys());
  const substitutions = numbers.map(number => {
  
    if (number.toString().includes('3')) {
        return "won't you be my neighboor?";
    }  else if (number.toString().includes('2')) { 
        return "boop";  
    }  else if (number.toString().includes('1')) {
        return "beep";
    }  else {
        return number;
    }
  });

  //  this method will return the anwers in a string o the same line..

  // for (let i = 0; i <substitutions.length; i++) {
  //   output.innerHTML += substitutions[i]}


  substitutions.forEach(number => {
    output.innerHTML += `${number}<br>`;
  });
}


// utility interface Logic/// I don't really understand how to do my UIL need to do some research..
  
// function handleSubmit(e) {
//   e.preventDefault();
//   const handleSubmit = document.getElementById("input-number").value;
//   const output = document.querySelector("#output");
//   output.innerHTML = number.toString();
// }

// window.addEventListener("load", function() {
//   document.querySelector("form#form").addEventListener("btnSubmit", handleSubmit);
  
// });
