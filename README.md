# JS_Triangulo_de_Pascal
Criador de Triângulo de Pascal Feito com Javascript.

<h2 style="color:#f00">Código "ineficiente" (1ºCommit): </h2> O triângulo de pascal possui a = b, assim o código deveria usar o valor das linhas anteriores para criar uma nova. O código considera que 'a' poderia ser diferente de 'b', então ele monta toda a expressão para substituir os valores.

Atualmente o código tem as seguintes limitações:
- <h3>Calculo somente com duas incógnitas:</h3> Não é possível fazer, por exemplo, (a+b+c)^2.
 O triângulo de pascal envolve somente duas incógnitas, então não é um problema, mas é interessante, principalmente para treinar escalabilidade do código.
 
 - <h3>Não é calculada a potência 0:</h3> O código monta a expressão, ex: (a+b)^2 = a^2 + 2ab + b^2 e depois substitui os valores. A expressão na potência 1 é '', então se adiciona a e b, (a+b)^1 = a + b. Na lógica atual precisaria-se da expressão inicialmente como "-a -b" de modo que se anulassem com "a b" e ficasse '', isso não é possível já está sendo manipulada uma string e não um número. Se fosse usado alguma condicional para esse caso, é mais fácil imprimir somente 1 e deixar o resto da expressão ser feita pelo multiplicar().
 
 O próximo passo é criar um pequeno site para facilitar o uso do programa.
