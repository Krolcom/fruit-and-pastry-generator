const fruit = require('./fruit.json')
const pastry = require('./pastry.json')

const rng = (max) => Math.floor(Math.random() * max)

console.log(`There are ${fruit.length} fruits in the database.`)
console.log(`There are ${pastry.length} pastries in the database.`)

console.log(fruit[rng(fruit.length)]['Common name'], pastry[rng(pastry.length)].Name)