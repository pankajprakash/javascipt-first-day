document.getElementById("b1").style.display="none";
document.getElementById("b2").style.display="none";
var first=false;
var second=false;

function box1()
{
    first=true; 
    switch1();
}
function box2()
{
    second=true; 
    switch1();
}


function switch1()
{
    if((second==false)&&(first==true))
    {
        document.getElementById("b1").style.display="block";
        document.getElementById("b2").style.display="none";
    }
}