
const numbers=document.querySelectorAll('.number'), 
       operations=document.querySelectorAll('.operator'),
       decimalBtn=document.querySelector('#decimal'),
       clearBtns=document.querySelectorAll('.clearbtn');
let    displayInput=document.querySelector('#display');

let currentNumMemory=0,
    newNumMemory=false,
    pendingOpMemory='';
      
for(let i=0; i<numbers.length; i++) {
    let num=numbers[i];
    num.addEventListener('click', numberClick);
}

for(let i=0; i<operations.length; i++){
    let op=operations[i];
    op.addEventListener('click', operationClick);
    
}

for(let i=0; i<clearBtns.length; i++){
    let clbtn=clearBtns[i];
    clbtn.addEventListener('click', clearDisplay);

}

decimalBtn.addEventListener('click', decimalClick);




function factorial(n){
  let result=1;
  
  if(n===0||n<0||n>100000) {result=1;}
  else {
    result=n;
    for(let i=n; n>1;n--)
      {result*=n-1;}
  }
   return result;
 
}

function numberClick(){
   if(newNumMemory){
        displayInput.value=this.textContent;
        newNumMemory=false;
    } else {
            displayInput.value==='0'?displayInput.value=this.textContent:
            displayInput.value+=this.textContent;
            }
}

function operationClick(){
    let num=displayInput.value;
    if (this.textContent==='±'){ displayInput.value=parseFloat(displayInput.value)*-1; return;}
    if(newNumMemory && pendingOpMemory!=='=') {
        displayInput.value=currentNumMemory;}
    else{
        newNumMemory=true;
        if(pendingOpMemory==='+'){
            currentNumMemory+=parseFloat(num);}
         else if (pendingOpMemory==='-'){
            currentNumMemory-=parseFloat(num);}
            else if (pendingOpMemory==='*'){
                currentNumMemory*=parseFloat(num);}
                else if (pendingOpMemory==='/'){
                    currentNumMemory/=parseFloat(num);}
                    else if (this.textContent==='!'){
                        currentNumMemory=factorial(parseFloat(num));
                        newNumMemory=false;}
                        else if (this.textContent==='x²'){
                            currentNumMemory=Math.pow(parseFloat(num),2);
                            newNumMemory=false;}
                            else if (pendingOpMemory==='x^'){
                                currentNumMemory=Math.pow(parseFloat(currentNumMemory),num);
                               }
                            else if (this.textContent==='√'){
                                currentNumMemory=Math.sqrt(parseFloat(num));
                                newNumMemory=false;}
                                
                                else {
                currentNumMemory=parseFloat(num);
                }
    }
    displayInput.value=currentNumMemory;
    pendingOpMemory=this.textContent;


 }


 

function clearDisplay() {
   if(this.textContent==='ce') {
       displayInput.value='0'; 
       newNumMemory=true;
    } else if(this.textContent==='c'){
        displayInput.value='0'; 
        newNumMemory=false;
        currentNumMemory=0;
        pendingOpMemory='';
    }
}



function decimalClick() {
    let decimalMem=displayInput.value;
        if(newNumMemory){

            decimalMem='0.';
            newNumMemory=false;
        } else {
            if(decimalMem.indexOf('.')=== -1){
                decimalMem+='.';
            }
        }
    displayInput.value=decimalMem;
}



