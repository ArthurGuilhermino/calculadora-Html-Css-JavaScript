let result = document.querySelector('#resultado');
let delet = document.querySelector('#del');
let decreases = document.querySelector('#decreases');
let equals = document.querySelector('#equals');

function inserir(number) {
    document.querySelector('#resultado').textContent = result.textContent + number;
}


delet.addEventListener('click', () => {
    result.textContent = '';
});

decreases.addEventListener('click', () => {

    let element = document.querySelector('#resultado').textContent;
    document.querySelector('#resultado').textContent = element.substring(0, element.length - 1)
});


equals.addEventListener('click', () => {

    let resultado = document.querySelector('#resultado').textContent;

    if (resultado) {
        document.querySelector('#resultado').textContent = eval(resultado);
    }
});
