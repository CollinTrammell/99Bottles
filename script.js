 var bottles = 99,bottle="bottles",text="";

  var output = document.getElementById('output');  
  while (bottles > 0) {
    if (bottles==1) bottle="bottle";
    text = "<p>"+bottles+" "+bottle+" of beer on the wall, "+bottles+" "+bottle+" of beer.<br/>";
    bottles--;
    if (bottles==0) bottles="no more";
    text += "Take one down and pass it around, "+bottles+" bottles of beer on the wall.</p>"
    output.innerHTML += text;
  }
  output.innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer.<br/>Go to the store and buy some more, 99 bottles of beer on the wall.<p>";