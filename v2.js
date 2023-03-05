
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const inputC = document.getElementById('inputC').value;

    bhaskara(inputA, inputB, inputC);
});

function bhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        console.log(`x1 = ${x1}  x2 = ${x2}`);

        const raizes = [x1, x2];
        raizes.forEach(raiz => {
            if (raiz < 0) {
                console.log(`A raiz ${raiz} é negativa, logo não é considerada.`);
            }
        });
    } else if (delta === 0) {
        const x = -b / (2 * a);
        console.log(`A equação possui uma raiz real: x = ${x}`);
    } else {
        console.log('Esta equação não possui raizes reais.');
    }
}
