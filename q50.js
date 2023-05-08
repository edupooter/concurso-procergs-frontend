const usuarios = [
    { id: 5, nome: "João", idade: 20 },
    { id: 7, nome: "Maria", idade: 20 },
    { id: 10, nome: "Pedro", idade: 24 },
    { id: 13, nome: "Marcos", idade: 19 },
    { id: 16, nome: "Joana", idade: 24 },
    { id: 19, nome: "Laura", idade: 28 },
];

const usuarioSet = new Set();

for (const u of usuarios)
    usuarioSet.add(u.idade);
console.log(usuarioSet);

const usuarioMap = new Map();
for (const u of usuarios)
    usuarioMap.set(u.id, u);
console.log(usuarioMap.get(5).nome);

// Outputs:
/*
{ 20, 24, 19, 28 }
João
*/