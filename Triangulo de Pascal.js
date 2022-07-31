const a = 1, b = 1, potencia = 3; 
let expressao = ['']; // A expressão se refere a linha com a distributiva, ex: (a+b)^2 é a^2 + ab + ab + b^2.

const multiplicar = () => {
    let linha = []; // É a linha com cada etapa da distributiva. Considere a expressão como (a+b)^1
    expressao.forEach((item) => { linha.push(`${item}a`);}); // Com o chuveirinho, aa + ba
    expressao.forEach((item) => { linha.push(`${item}b`);}); // Com o chuveirinho, ab + bb
    expressao = linha; // Junta o chuveirinho, ai a expressão fica aa + ba + ab + bb;
    calcular(); // Com a expressão 'quase' feita, essa função substitui os valores a e b para calcular.
};

const calcular = () => {
    let linhaCalculada = []; // Guarda o valor de cada número após a substituição, ex: com a = 2, vai guardar aa como 2*2 = 4;
    let contagemABExpressao = []; //Guarda a contagem de 'a' e 'b' de cada número da expressao (explicado da função 'contarAB').
    expressao.forEach((item) => {
        const contagemAB = contarAB(item); // Conta  a quantidade de 'a' e 'b' em um número.
        const vezesRepetidas = verificarRepeticao(contagemAB); // Conta quantas vezes o mesmo número aparece na expressao, ex: ab e ba são o mesmo número, logo aparecem 2 vezes.
        let repetido = false; // Guarda se o número já apareceu ou não, baseado na variável contagemABExpressao (exemplo na linha anterior). 
        contagemABExpressao.forEach((numAB) => { if(String(numAB) == String(contagemAB)) repetido = true;}) 
        // Linha20: Verifica cada contagem guardada, se a contagem do número for igual ao que aparece na contagemABExpressao é porque já apareceu, ou seja, é repetido.
        if(!repetido){ // Se o número não for repetido
            linhaCalculada.push(vezesRepetidas*Math.pow(a,contagemAB[0])*Math.pow(b,contagemAB[1])); // aa = a^2, a quantidade de vezes que aparece em aaa (funcao ContaAB), o mesmo valendo para bb = b^2.
            //Linha 23: as vezes repetidas, ex: em (a+b)^2 temos aa+ba+ab+bb, como ab = ba aparece duas vezes. Essa linha substitui esses valores (incluindo o a e b escolhidos) para calcular o número.
            contagemABExpressao.push(contagemAB); // Inclui a contagem de a e b do número da espressao, para que não haja repeticao.
        }
    });
    imprimir(String(linhaCalculada)); // Apresenta na tela a linha do triângulo com os valores calculados.
}

const contarAB = numero =>{
    let contagemAB = [0,0]; // Guarda quantas vezes a e b se repetem em um número, ex: aab tem dois 'a' e 1 'b', assim guardará [2,1]; 
    for(i = 0; i < numero.length; i++){ // Verifica cada caracter do número
        if(numero.charAt(i) == 'a') contagemAB[0] += 1 // Se tiver um 'a' conta +1 a.
        else contagemAB[1] += 1; // Se não o caracter é b, ent conta mais um b.
    }
    return contagemAB; 
}

const verificarRepeticao = numAB => {
    let ocorrencia = 0;
    expressao.forEach((numero) =>{ // Faz os passos abaixo para cada número da expressao
        const contagemAB = contarAB(numero); // Conta a quantidade de 'a' e 'b'.
        if(contagemAB[0] == numAB[0] && contagemAB[1] == numAB[1]) ocorrencia += 1; // Se a quantidade de 'a' e 'b' do numero da expressao for igual ao número verificado então conta mais uma ocorrência.
    })
    return ocorrencia;
};

const imprimir = (...linha) => {
    linha.forEach((numero) => console.log(numero)); // Adiciona a linha do triângulo cada número.
}

if(potencia >= 0) console.log(1); // O código só consegue calcular a partir da primeira potência.
if(potencia > 0)  for(i = 0; i<=potencia; i++) multiplicar(); // Calcula cada linha do triângulo, repetindo de acordo ao número que está sendo elevado.