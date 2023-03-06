const btn = document.querySelector('.btn');
const resultadoDiv = document.querySelector('.resultado');
const paragrafoDiv = document.querySelector('.paragrafos');
const x1Span = document.querySelector('.x1');
const x2Span = document.querySelector('.x2');
const regras = document.querySelector('.regras p');



btn.addEventListener('click', (e) => {
    e.preventDefault();

    const valorA = document.getElementById('inputA').value;
    const valorB = document.getElementById('inputB').value;
    const valorC = document.getElementById('inputC').value;

    bhaskara(valorA, valorB, valorC)

    resultadoDiv.style.visibility = 'visible';
})



function bhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c

    if (delta > 0) {

        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        const raizes = [Number.parseInt(x1), Number.parseInt(x2)];

        x1Span.textContent = Number.parseInt(x1).toString();
        x2Span.textContent = Number.parseInt(x2).toString();


        raizes.forEach(raiz => {
            if (raiz < 0) {
                regras.textContent = `A raiz ${raiz} é negativa, logo não é considerada.`;
            }
        })


    } else {
        paragrafoDiv.textContent = 'Δ < 0. Esta equação não possui raizes'
        regras.textContent = ''
    }
}

//tentativa de colocar a formula

// function addFormula(a, b, c) {

//     const formula = document.createElement('div.formula');

//     formula.appendChild(`<h2>${a}X<sup>2</sup>${b < 0 ? b : '-', b}X ${c < 0 ? c : '-', c} =  0</h2>`)

// }


