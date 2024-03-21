let input_box=document.querySelector("input");
let btn=document.querySelector("button");
let output=document.querySelector(".output");



//once button i click
// get the value of  input box
//and find the 2% as a tip 
//show the out put


//event=>click
// addevenetListener

btn.addEventListener("click", calculateTip)

function calculateTip()
{
    console.log(input_box.value);
    let value=input_box.value //10000
    let tip=value*0.02
    output.innerHTML=`you should tip ${tip}`
}