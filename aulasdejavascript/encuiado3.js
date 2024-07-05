var menorPeso = Number.MAX_SAFE_INTEGER; // Maior número seguro em JavaScript
var maiorPeso = 0;
var somaPeso = 0;
var contador = 0;
var input = 0;
var peso = 0;
var resultado = 0;
var mediaPeso = 0;

while (true) 
{
    // Solicita o peso do usuário
    input = prompt("Informe o peso do gado (0 para terminar):");
    peso = parseFloat(input);

    // Verifica se a entrada é um número válido
    if (isNaN(peso)) 
    {
        alert("Por favor, insira um número válido.");
        continue;
    }

    // Termina se o peso for 0
    if (peso === 0) 
    {
        break;
    }

    // Atualiza os valores de menor e maior peso
    if (peso < menorPeso) 
    {
        menorPeso = peso;
    }
    if (peso > maiorPeso) 
    {
        maiorPeso = peso;
    }

    // Adiciona o peso à soma total e incrementa o contador
    somaPeso += peso;
    contador++;
}

// Calcula a média
mediaPeso = contador > 0 ? somaPeso / contador : 0;

// Exibe os resultados
resultado = 'Menor peso: ' + (contador > 0 ? menorPeso : 'Nenhum gado registrado') + '\n';
resultado += 'Maior peso: ' + (contador > 0 ? maiorPeso : 'Nenhum gado registrado') + '\n';
resultado += 'Média dos pesos: ' + (contador > 0 ? mediaPeso.toFixed(2) : 'Nenhum gado registrado');

alert(resultado);
