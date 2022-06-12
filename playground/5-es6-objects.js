//Object Property Shrothand

const name = 'Robin'
const userAge = 47

const user = {
    name,
    age: userAge,
    location: 'Lawrenceville'
}

console.log(user)

// Object Destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

//Too much code here
// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock} = product

// console.log(productLabel)
// console.log(stock)
//console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)