let grado = {
  english: 95,
  math: 80,
  science: 89,
  filipino: 92,
  pe: 95,
};

let ave = 0;

for (let i in grado) {
  console.log(`${i}: ${grado[i]}`);
  ave += grado[i];
}

ave /= Object.keys(grado).length;
console.log(`Averege: ${ave}`);

// JSON & FOR-IN LOOP