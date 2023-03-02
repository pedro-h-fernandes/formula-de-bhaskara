const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const inputC = document.getElementById('inputC');
const btn = document.querySelector('.btn');

const valorA = inputA.value;
const valorB = inputB.value;
const valorC = inputC.value;


btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('valores input', valorA, valorB, valorC)
    // bhaskara(valorA, valorB, valorC)

})



function bhaskara (a, b, c) {
    const delta = b**2 - 4 * a * c

    if (delta > 0 ) {
        console.log('delta', delta)

        const x1 = -(b) + delta**0.5 / 2 * a;
        const x2 = -(b) - delta**0.5 / 2 * a;

        const raizes = [Number.parseInt(x1), Number.parseInt(x2)];

        console.log(`x1 = ${Number.parseInt(x1)}  x2 = ${Number.parseInt(x2)}`)

        raizes.forEach(raiz => {
            if (raiz < 0 ) {
                console.log (`a raiz ${raiz} é negativa, logo não é considerada.`)
            }
        })


    } else {
        console.log('esta equação nao possui raizes')
    }
}

// bhaskara(12, 20, 2)