const stack = () => {
    const date = [];
    let top = 0;
    let minNumber;

    const push = (element) => {
        if (element == parseInt(element)) {
            date[top++] = element;
            if (minNumber === undefined || element < minNumber) {
                minNumber = element;
            }
            return element;
        } else {
            return `${element} - Elemento não inteiro!`
        }
    }

    const pop = () => {
        if (top <= 0) {
            return 'Pilha vazia!';
        } else {
            const elementoRetornado = date.splice(--top)[0];

            if (elementoRetornado === minNumber) {
                minNumber = date[0];
                for (let cont = 0; cont < date.length; cont++) {
                    if (date[cont] <= minNumber) {
                        minNumber = date[cont];
                    }
                }        
            }

            return elementoRetornado;
        }
    }

    return {
        push,
        pop,
        getMinNumber: () => minNumber || 'Pilha vazia',
        date,
    }
}

const pilha = stack();

console.log('EMPILHAMENTO!')
console.log(pilha.push(9));
console.log(pilha.push(5));
console.log(pilha.push(7));
console.log(pilha.push(2));
console.log(pilha.push(1));
console.log('DESEMPILHAMENTO!');
console.log(pilha.pop());
console.log(pilha.pop());
console.log('Menor número:', pilha.getMinNumber());
console.log(pilha.pop());
console.log(pilha.pop());
console.log(pilha.pop());
console.log('Menor número:', pilha.getMinNumber());
