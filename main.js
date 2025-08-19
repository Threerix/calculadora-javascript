// main.js
// Importing functions from calculadora.js
import {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  potencia,
  raizQuadrada,
  fatorial,
} from "./calculadora.js";

// Example usage of the imported functions
console.log("Soma:", soma(5, 3)); // 8
console.log("Subtração:", subtracao(5, 3)); // 2
console.log("Multiplicação:", multiplicacao(5, 3)); // 15
console.log("Divisão:", divisao(6, 3)); // 2
console.log("Potência:", potencia(2, 3)); // 8
console.log("Raiz Quadrada:", raizQuadrada(16)); // 4
console.log("Fatorial:", fatorial(5)); // 120

// Handling potential errors
try {
  console.log("Divisão por zero:", divisao(5, 0)); // Error
} catch (error) {
  console.error("Erro:", error.message);
}

try {
  console.log("Raiz quadrada de número negativo:", raizQuadrada(-4)); // Error
} catch (error) {
  console.error("Erro:", error.message);
}

try {
  console.log("Fatorial de número negativo:", fatorial(-3)); // Error
} catch (error) {
  console.error("Erro:", error.message);
}
