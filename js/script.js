

  function beep (text) {
    const beepArray = text.split("");
    const doubleBeepArray = []
    if (beepArray.length < 0 && beepArray > 1000) { 
      for(let index = -0; index <beepArray.length; index++);

    }
    return 0;
  
  }

window.addEventListener("load", function (e) {
  const input1 =document.getElementById("input").value;
  const results = beep ("beep");
  document.getElementById("outputbox").innertext = results;
  e.preventDefault();
});
  
