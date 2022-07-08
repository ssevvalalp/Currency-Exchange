
const btnToptoBottom = document.getElementById("btnToptoBottom");
const btnBottontoTop = document.getElementById("btnBottontoTop");
const btnClear = document.getElementById("clbtn");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let currency = 10;

btnToptoBottom.addEventListener("click", write);
function write(){
    const calculatedVal1 =parseFloat(input1.value * currency); 
    input2.value = calculatedVal1;

} 

btnBottontoTop.addEventListener("click", write2);
function write2(){
    const calculatedVal2 = parseFloat(input2.value / currency); 
    input1.value = calculatedVal2;
}

btnClear.addEventListener("click",clear);
function clear(){
    input1.value = "";
    input2.value = "";
}



