const inputField = document.querySelector('input[type="text"]');
const selectField = document.querySelector('#option');
const outputParagraph = document.querySelector('#output');
function premier(a){
    if (a<2) {return false;}
    else {
        test=true
        for (let i=2;i<=Math.sqrt(a);i++){
            if (a%i===0){
                test=false
                break
            }
        }
        return test;
    }
}
function updateOutput() {
    const inputValue =parseInt(inputField.value.trim()); 
    const selectedOption = selectField.value;
    outputParagraph.textContent=''
    let test_postif=true;
    let test_nan=true;
    if (isNaN(inputValue) && selectedOption!='none'){
        outputParagraph.textContent=("Please enter a valid integer.");
        test_nan=false;
        return;
    }
    if (test_nan){
        if (inputValue===0 && selectedOption!='none'){
            outputParagraph.textContent=("enter an integer please");
            return;
        }
        if (inputValue<0 && selectedOption!="pair" && selectedOption!="none" && selectedOption!="inpair"){
            outputParagraph.textContent=("enter a positive number");
            test_postif=false;
    }
    if (selectedOption==="pair"){
        let test=inputValue%2===0;
        if (test){
            outputParagraph.textContent="the number "+String(inputValue)+" is even";
        }
        else{
            outputParagraph.textContent="the number "+String(inputValue)+" is not even";
        }
    }
    if (selectedOption==="inpair"){
        let result=inputValue%2==1;
        if (result){
            outputParagraph.textContent="the number "+String(inputValue)+" is odd"
        }
        else{
            outputParagraph.textContent="the number "+String(inputValue)+" is not odd"
        }
    }
    if (selectedOption==="les_diveser" && test_postif){
        
        let result="";
        for(let i=1;i<=inputValue;i++){
            if (inputValue%i===0){
                result+=String(i)+' '
            }
            }
            outputParagraph.textContent="****The dividers****";
            outputParagraph.innerHTML+="<br>"+String(result); 
        }
        if (selectedOption==="factorial" && test_postif){
            let result=1;
            for(let i=1;i<=inputValue;i++){
                result*=i
            }
            outputParagraph.textContent=String(inputValue)+"!="+String(result)
        }
        if (selectedOption==="nomber_narcissique" && test_postif){
            if (inputValue<10){
                outputParagraph.textContent=("we cannot calculate a number big to 10")
            }
            else{
                let long=String(inputValue).length;
                let result=0;
            for(let i=0;i<long;i++){
                result+=parseInt(String(inputValue)[i])**long;
            }
            if (inputValue===result){
                outputParagraph.textContent="the  number "+String(inputValue)+"is narcissique"
            }
            else{
                outputParagraph.textContent="the number "+String(inputValue)+"is not narcissique "
            }
        }
    }
    if (selectedOption==="superpremier" && test_postif){
        if (inputValue<10){
            outputParagraph.textContent=("enter un nomber  big to 10")
        }
        else{
            let a=inputValue;
            let b=true;
            while (a>1){
                if (premier(a)===false){
                    outputParagraph.textContent='the  number '+String(inputValue)+' is not Superfirst';
                    b=false
                    break
                }
                else{
                    a=Math.floor(a/10);
                }
            }
            if (b){
                outputParagraph.textContent="the number est "+String(inputValue)+" is Superfirst" 
            }
        }
    }
    if (selectedOption==="totalement_inpair" && test_postif){
        let ch=String(inputValue); let test=true;
        for (let i=0;i<ch.length;i+=2){
            if (parseInt(ch[i])%2===0){
                test=false
                break
            }
        }
        if (test){
            outputParagraph.textContent="the number "+String(inputValue)+" is Totally odd";
        }
        else{
            outputParagraph.textContent="the number "+String(inputValue)+" is not Totally odd";
        }
    }
}
}
inputField.addEventListener('input', updateOutput);
selectField.addEventListener('change', updateOutput);