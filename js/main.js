let display = document.querySelector('[display]');

display.textContent = '0';
let zeroState = true;
let operators = []

let numberBtns = document.querySelectorAll('[btn_type="number"]');
let operatorBtns = document.querySelectorAll('[btn_type="operator"]');
let backspace = document.querySelectorAll('[btn_type="backspace"]');
let equalSign = document.querySelectorAll('[btn_type="result"]');

for (let i = 0; i < operatorBtns.length; i++) operators.push(operatorBtns[i].textContent);


console.log(operatorBtns)


for( let i = 0; i < numberBtns.length; i++ ){
    numberBtns[i].onclick = function(){
        if(zeroState){
            display.textContent = numberBtns[i].textContent
            zeroState = false
        }
        else if(zeroState != true){
            display.textContent += numberBtns[i].textContent
        }
    }
}

backspace[0].onclick = function(){
    display.textContent = display.textContent.slice(0, -1)

    let outLength = display.textContent.length;

    if( outLength == 0 ){
        zeroState = true;
        display.textContent = '0'
    }
}

for( let i = 0; i < operatorBtns.length; i++ ){
    operatorBtns[i].onclick = function(){

        let lastChar = display.textContent.at(-1);
         
        if(operatorBtns[i].textContent != lastChar){
            if( operators.indexOf(lastChar) == -1 ){
                display.textContent += operatorBtns[i].textContent
            } else {
                display.textContent = display.textContent.slice(0,-1) + operatorBtns[i].textContent
            }
        }
    }
}


equalSign[0].onclick = function(){
    let tempDisplay = display.textContent;

    if( tempDisplay.indexOf('×') != -1 ){
        let mult = display.textContent.indexOf('×');
        tempDisplay = tempDisplay.replaceAll('×', '*')
    }
    if( tempDisplay.indexOf('÷') != -1 ){
        let divider = display.textContent.indexOf('×');
        tempDisplay = tempDisplay.replaceAll('÷', '/')
    }
    display.textContent = eval( tempDisplay ).toString()
}