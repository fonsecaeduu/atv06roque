const prompt = require('prompt-sync')();

function pedirNota() {
    let nota;
    do {
        nota = parseInt(prompt("Digite uma nota entre zero e dez:"));
    } while (nota < 0 || nota > 10 || isNaN(nota));
    return nota;
}

function pedirUsuarioSenha() {
    let usuario, senha;
    do {
        usuario = prompt("Digite o nome de usuário:");
        senha = prompt("Digite a senha:");
        if (usuario === senha) {
            console.log("Senha não pode ser igual ao nome de usuário. Tente novamente.");
        }
    } while (usuario === senha);
    return [usuario, senha];
}

function validarInformacoes() {
    let nome, idade, salario, sexo, estadoCivil;
    do {
        nome = prompt("Digite seu nome:");
        idade = parseInt(prompt("Digite sua idade:"));
        salario = parseFloat(prompt("Digite seu salário:"));
        sexo = prompt("Digite seu sexo (f/m):").toLowerCase();
        estadoCivil = prompt("Digite seu estado civil (s/c/v/d):").toLowerCase();
    } while (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== 'f' && sexo !== 'm') || (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd'));
    return [nome, idade, salario, sexo, estadoCivil];
}

function calcularCrescimento() {
    let populacaoA = 80000;
    let populacaoB = 200000;
    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA *= 1.03;
        populacaoB *= 1.015;
        anos++;
    }
    return anos;
}

function calcularCrescimentoPersonalizado(popA, taxaA, popB, taxaB) {
    let anos = 0;
    while (popA < popB) {
        popA *= (1 + taxaA / 100);
        popB *= (1 + taxaB / 100);
        anos++;
    }
    return anos;
}

function imprimirNumerosSeparados() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}

function imprimirNumerosJuntos() {
    let numeros = '';
    for (let i = 1; i <= 20; i++) {
        numeros += i + ' ';
    }
    console.log(numeros);
}

function encontrarMaiorNumero() {
    let maior = -Infinity;
    for (let i = 0; i < 5; i++) {
        let num = parseInt(prompt("Digite um número:"));
        if (num > maior) {
            maior = num;
        }
    }
    return maior;
}

function calcularSomaEMedia() {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        let num = parseInt(prompt("Digite um número:"));
        soma += num;
    }
    let media = soma / 5;
    return [soma, media];
}

function imprimirImpares() {
    for (let i = 1; i <= 50; i += 2) {
        console.log(i);
    }
}

function gerarIntervalo(num1, num2) {
    let intervalo = [];
    for (let i = num1 + 1; i < num2; i++) {
        intervalo.push(i);
    }
    return intervalo;
}

function gerarIntervaloComSoma(num1, num2) {
    let intervalo = gerarIntervalo(num1, num2);
    let soma = intervalo.reduce((acc, curr) => acc + curr, 0);
    return [intervalo, soma];
}

function gerarTabuada(numero) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
}

function menuInicial() {
    console.log("Escolha uma função para executar:");
    console.log("1. Pedir Nota");
    console.log("2. Pedir Usuário e Senha");
    console.log("3. Validar Informações");
    console.log("4. Calcular Crescimento (População)");
    console.log("5. Calcular Crescimento Personalizado (População)");
    console.log("6. Imprimir Números (Separados ou Juntos)");
    console.log("7. Encontrar Maior Número");
    console.log("8. Calcular Soma e Média");
    console.log("9. Imprimir Números Ímpares");
    console.log("10. Gerar Intervalo entre Números");
    console.log("11. Gerar Intervalo entre Números com Soma");
    console.log("12. Gerar Tabuada");

    let escolha = parseInt(prompt("Digite o número da função que deseja executar:"));

    switch (escolha) {
        case 1:
            console.log("Nota válida:", pedirNota());
            break;
        case 2:
            console.log("Usuário e Senha:", pedirUsuarioSenha());
            break;
        case 3:
            console.log("Informações validadas:", validarInformacoes());
            break;
        case 4:
            console.log("Anos para ultrapassar ou igualar:", calcularCrescimento());
            break;
        case 5:
            let popA = parseInt(prompt("Digite a população do país A:"));
            let taxaA = parseFloat(prompt("Digite a taxa de crescimento do país A (%):"));
            let popB = parseInt(prompt("Digite a população do país B:"));
            let taxaB = parseFloat(prompt("Digite a taxa de crescimento do país B (%):"));
            console.log("Anos para ultrapassar ou igualar (personalizado):", calcularCrescimentoPersonalizado(popA, taxaA, popB, taxaB));
            break;
        case 6:
            console.log("Escolha como imprimir os números:");
            console.log("1. Separados");
            console.log("2. Juntos");
            let opcao = parseInt(prompt("Digite o número da opção desejada:"));
            if (opcao === 1) {
                console.log("Números separados:");
                imprimirNumerosSeparados();
            } else if (opcao === 2) {
                console.log("Números juntos:");
                imprimirNumerosJuntos();
            } else {
                console.log("Opção inválida.");
            }
            break;
        case 7:
            console.log("Maior número:", encontrarMaiorNumero());
            break;
        case 8:
            let resultadoSomaMedia = calcularSomaEMedia();
            console.log("Soma:", resultadoSomaMedia[0]);
            console.log("Média:", resultadoSomaMedia[1]);
            break;
        case 9:
            console.log("Números ímpares:");
            imprimirImpares();
            break;
        case 10:
            let num1 = parseInt(prompt("Digite o primeiro número do intervalo:"));
            let num2 = parseInt(prompt("Digite o segundo número do intervalo:"));
            console.log("Intervalo entre números:", gerarIntervalo(num1, num2));
            break;
        case 11:
            let numerosIntervalo = gerarIntervaloComSoma(3, 8);
            console.log("Intervalo entre números:", numerosIntervalo[0]);
            console.log("Soma dos números:", numerosIntervalo[1]);
            break;
        case 12:
            let numeroTabuada = parseInt(prompt("Digite o número para a tabuada:"));
            gerarTabuada(numeroTabuada);
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}

menuInicial();