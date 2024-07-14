let items = [
    { name: 'Mobile', price: 10000 },
    { name: 'Mouse', price: 500 },
    { name: 'Laptop', price: 50000 }
];
items.sort((a, b) => b.price - a.price);
console.log(items);