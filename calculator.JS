

function add(){
    var a,b,c;
  a=Number(document.getElementById("first_num").value);
  b=Number(document.getElementById("second_num").value);
  c=a+b;
  document.getElementById("show_result").value= c;
  
  }


  function subtract(){
    var a,b,c;
  a=Number(document.getElementById("first_num").value);
  b=Number(document.getElementById("second_num").value);
  c=a-b;
  document.getElementById("show_result").value= c;
  
  }
  function multiply(){
    var a,b,c;
  a=Number(document.getElementById("first_num").value);
  b=Number(document.getElementById("second_num").value);
  c=a*b;
  document.getElementById("show_result").value= c;
  
  }

  function div(){
    var a,b,c;
  a=Number(document.getElementById("first_num").value);
  b=Number(document.getElementById("second_num").value);
  c=a/b;
  document.getElementById("show_result").value= c;
  
  }

  function modulus(){
    var a,b,c;
  a=Number(document.getElementById("first_num").value);
  b=Number(document.getElementById("second_num").value);
  c=a%b;
  document.getElementById("show_result").value= c;
  
  }