const incognita = [1,2];
const potencia = 4;
let expressao = [];

const criarLinhaTriangulo = () => {
    let linha = [];
    for(i = 1; i < expressao.length; i++) linha.push(expressao[i]+expressao[i-1]);
    linha.unshift(incognita[0]);
    linha.push(incognita[1]);
    expressao = linha;
    console.log(String(expressao));
}

if(potencia>=0) console.log(1);
for(i = 0; i<potencia; i++) criarLinhaTriangulo();