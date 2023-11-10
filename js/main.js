let display = document.querySelector('[display]');

display.textContent = '0';
let initState = true;

let numberBtns = document.querySelectorAll('[btn_type="number"]');
let operatorBtns = document.querySelectorAll('[btn_type="operator"]');


console.log(operatorBtns)


for( let i = 0; i < numberBtns.length; i++ ){
    numberBtns[i].onclick = function(){
        if(initState){
            display.textContent = numberBtns[i].textContent
            initState = false
        }
        else if(initState != true){
            display.textContent += numberBtns[i].textContent
        }
    }
}
