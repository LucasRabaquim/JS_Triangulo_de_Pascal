const incognita: number = 1;
const potencia: number = 10;
let expressao: number[] = [];
const criarTriangulo = () => {
    let linha:number[] = [];
    for(let j:number =0;j<potencia;j++){
    for(let i:number = 1; i < expressao.length; i++)
        linha.push(expressao[i] + expressao[i-1]);
    linha.unshift(1);
    linha.push(1);
    expressao = linha;
    console.log(expressao);
    }
}
criarTriangulo();