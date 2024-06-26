let students = [
  {
    name: "Gabriel",
    testOne: 10,
    testTwo: 9.8,
  },
  {
    name: "Dre",
    testOne: 9,
    testTwo: 8,
  },
  {
    name: "Nathan",
    testOne: 8,
    testTwo: 10,
  },
  {
    name: "João",
    testOne: 10,
    testTwo: 10,
  },
  {
    name: "Eduardo",
    testOne: 9,
    testTwo: 9.8,
  },
  {
    name: "Erick",
    testOne: 9.5,
    testTwo: 9,
  },
  {
    name: "Julio",
    testOne: 5,
    testTwo: 4,
  },
]

for (i = 0; i < 8; i++) {

    let media = (students[i].testOne + students[i].testTwo) /2
    media = media.toFixed(1);
    

    if (media >= 7){
      alert(`${students[i].name} você passou com média ${media} meus parabéns!`)
    } else {
      alert(`${students[i].name} você não conseguiu passar, sua média foi de ${media}, estude mais para a prova de recuperação!`)
    }

  }