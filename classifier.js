let heroName = "Karlach";
let heroXP = 50000;

let level;

if (heroXP < 1000) {
  level = "Ferro";
} else if (heroXP >= 1001 && heroXP <= 2000) {
  level = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
  level = "Prata";
} else if (heroXP >= 5001 && heroXP <= 7000) {
  level = "Ouro";
} else if (heroXP >= 7001 && heroXP <= 8000) {
  level = "Platina";
} else if (heroXP >= 8001 && heroXP <= 9000) {
  level = "Ascendente";
} else if (heroXP >= 9001 && heroXP <= 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}

console.log(`O Herói de nome ${heroName} está no nível de ${level}!`);