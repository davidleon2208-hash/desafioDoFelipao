// 1. Variáveis e Coleções (Array de objetos para testar vários heróis)
const herois = [
    { nome: "Arthur", xp: 950 },
    { nome: "Jaina", xp: 1500 },
    { nome: "Uther", xp: 3500 },
    { nome: "Sylvanas", xp: 6500 },
    { nome: "Valeera", xp: 7200 },
    { nome: "Illidan", xp: 8800 },
    { nome: "Gul'dan", xp: 9999 },
    { nome: "Medivh", xp: 15000 }
];

// 2. Laço de Repetição (Percorre cada herói da lista)
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // 3. Estruturas de Decisão (Operadores e Condicionais)
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) { 
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // 4. Saída
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

console.log("Desafio concluído!");
console.log("Obrigado por participar!");    