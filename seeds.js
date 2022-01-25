const mongoose = require('mongoose');
const Product = require ('./models/product');

main().catch(err => {
    console.log('MONGO CONNECTION ERROR!');
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmStand');
  console.log('MONGO CONNECTION OPEN!');
};

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// });
// p.save()
// .then( data => {
//     console.log('worked');
//     console.log(data);
// }). catch ( e =>{
//     console.log('not worked');
//     console.log(e);
// });

const seedsProducts = [
    {
        name: 'Carrot',
        price: 1.89,
        category: 'fruit'
    },
    {
        name: 'Tomato',
        price: 5.11,
        category: 'dairy'
    },
    {
        name: 'Apple',
        price: 3.99,
        category: 'vegetable'
    },
    {
        name: 'Banana',
        price: 4.0,
        category: 'vegetable'
    },
    {
        name: 'Coco',
        price: 2.53,
        category: 'dairy'
    }
];

Product.insertMany(seedsProducts)
.then( res => console.log(res) )
.catch( err => console.log(err) );