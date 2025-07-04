const button = document.getElementById('generate');

button.addEventListener('click', function(){
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(result)){
        result = "Insira valores válidos!";
    }

    document.querySelector('#result > span').textContent = result;
});

const resetbutton = document.getElementById('reset');

resetbutton.addEventListener('click',function(){
    document.getElementById('min').value= '';
    document.getElementById('max').value= '';
    document.querySelector("#result > span").textContenmt = '00';
});