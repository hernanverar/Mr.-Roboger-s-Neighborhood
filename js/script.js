// utility logic

function userName (name) {
  let userArray = [];
  for (let i = 0; i <= name; i++) {
    userArray.push(i);
}
return nameToNum(userArray);

}

function nameToNum (array) {
  array1= [];
  array.array.forEach(element => {
    if (element.toString().includes("1")){
      array1.push("beep");
    } else  {
      array1.push("element");
    }
  });


}


  window.onload = function(){
    let form = document.querySelector('form');
    form.onsubmit = function(event){
      event.preventDefault();
      document.getElementById("outputbox");
  }
}; 
