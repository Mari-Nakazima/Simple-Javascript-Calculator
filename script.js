const resultado = document.querySelector('#screen');


function insert(num){
    resultado.innerHTML += num;
}

function clean(){
    resultado.innerHTML = '';
}

function backspace(){
    let result = document.getElementById('screen').innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1);
}

function calcular(){
    
    document.getElementById('screen').innerHTML = eval(resultado.innerHTML);
   
    
}