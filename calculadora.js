    function soma(a, b) {
    return a + b;
    }
    function subtracao(a, b) {
    return a - b;
    }
    function multiplicacao(a, b) {
    return a * b;
    }
    function divisao(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
    }
    function potencia(a, b) {
    return Math.pow(a, b);
    }
    function raizQuadrada(a) {
    if (a < 0) {
        throw new Error("Raiz quadrada de número negativo não é permitida.");
    }
    return Math.sqrt(a);
    }
    function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial de número negativo não é definido.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
    }

    export {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    potencia,
    raizQuadrada,
    fatorial,
    };
