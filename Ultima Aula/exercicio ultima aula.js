let amigo = {Nome :'Jose',
 Sexo:'M',
 Peso: 85.4,
 engordar(p=0){
    console.log('Engordou')
    this.Peso += p
}}
amigo.engordar(3)
console.log(`${amigo.Nome} pesa ${amigo.Peso}Kg `)