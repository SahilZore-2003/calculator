
let screen = document.querySelector('.input');
let button = document.querySelectorAll('.btn');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');

 button.forEach(function(buttons){
    buttons.addEventListener('click',function(e){
        let value =e.target.dataset.num;
        screen.value += value;
    })
 })

 equal.addEventListener('click',function(e){
    if(screen.value === ''){
        screen.value = "";
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
 })

 clear.addEventListener('click',function(e){
    screen.value = "";
 })