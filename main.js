//===============================================const 

const user42 = { nome: 'Faran'};

user42.nome = 'Ruziel';

console.log(user42);

//===============================================HandleArray

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(item, index){
    return item + index;
});

const sum = arr.reduce(function(total, next) {
    return total + next;
});

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

const find = arr.find(function(item) {
    return item === 4;
})

console.log("Array original: " + arr);
console.log("Array Map: " + newArr);
console.log("Array Reduce: " + sum);
console.log("Array Filter: " + filter);
console.log("Array Find: " + find);

//===============================================Arrow Function
const newArr2 = arr.map(item => item * 2);

console.log("Arrow Function " + newArr2);

const arrowFun = () => ({ name: 'Nikin' });

console.log(arrowFun());

//===============================================Valores Padrão

const soma = (a = 3, b = 6) => a + b;
console.log(soma(1));
console.log(soma());

//===============================================Desestruturação

const user53 = {
    nome: "Faran",
    idade: 32,
    endereco: {
        cidade: "Portalegre",
        estado: "RN"
    },
}
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = user53;

function mostraEstado({ endereco: { estado } }) {
    console.log(estado);
}

mostraEstado(user53);

// REST = recebe todos os dados passados de forma dinâmica
// ou seja, recebe quantos valores forem passados.

const user39 = {
    nome39: 'Faran',
    idade: 32,
    empresa: 'PMP'
};

const { nome39, ...resto } = user39;

console.log(nome39);
console.log(resto);

function somaTudo(...params) {
    return (
        console.log("Resultado da soma de (", ...params,") =" ,
            params.reduce((total, next) => total + next)
        )    
    )
}

somaTudo(1,1,2,3,4,5,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4)

// SREAD = espalha todos os valores em outra estrutura de dados
// ou variável

const spredArr = [...arr, ...newArr];

console.log(spredArr);

//exemplo de spread com objeto

const user129 = {
    nome: 'Faranor',
    idade: 4029,
    empresa: 'Elfos Revoltosos'
};

const user130 = { ...user129, nome: 'Xaku' };

console.log(user129, user130);




//===============================================





class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

    static soma(a, b) {
        return a + b;
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Bulaxa');
    
}

MinhaLista.mostraUsuario();
const resultado = TodoList.soma(21, 21);
console.log(resultado);