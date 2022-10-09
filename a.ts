import { Animal_B_1, Animal_B_2 } from './b'

enum Animal_A_1 {
  CAT = 'cat',
}

const enum Animal_A_2 {
  DOG = 'dog',
}

// can not be inlined
console.log(Animal_A_1.CAT)
console.log(Animal_B_1.CAT)

// can be inlined
console.log(Animal_A_2.DOG)
console.log(Animal_B_2.DOG)
