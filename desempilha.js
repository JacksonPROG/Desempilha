const Stack = () => {
    const date = []
    let top = -1;

    const push = (element) => {
        top++;
        date[top] = element;
        if (element == parseInt(element)) {
            return element
        } else {
            date.splice(top--)
            return (`${element} - Elemento não é número inteiro`)
        }
    }

    const pop = () => {
        if(top<0){
            return 'Sem elementos para retornar!';
        } else {
            const elementoRetornado = date[top];
            top--;
            return elementoRetornado;
        }
    }

    function minNumber() {
        let elemento = date[0]
        let cont = 0
        for (cont; cont < date.length; cont++) {
            if (date[cont] < elemento) {
                elemento = date[cont];
                continue;
            }
        }

        if (elemento >= 0) {
            return elemento
        } else {
            return 'Pilha vazia'
        }
        
    }

    return {
        push,
        pop,
        minNumber,
    }
}

const pilha = Stack();

console.log('ÁREA DE EMPILHAMENTO!')

console.log(pilha.push(3));
console.log(pilha.push(9));
console.log(pilha.push(5.5));
console.log(pilha.push(7));
console.log(pilha.push(2));

console.log('ÁREA DE DESEMPILHAMENTO!');

console.log(pilha.pop());
console.log(pilha.pop());

console.log('Menor número:',pilha.minNumber());

console.log(pilha.pop());
console.log(pilha.pop());
console.log(pilha.pop());

console.log('Menor número:',pilha.minNumber());
