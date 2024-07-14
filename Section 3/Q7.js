let people = [
    { name: 'Umer', age: 18 },
    { name: 'Usman', age: 15 },
    { name: 'Zain', age: 20 }
];
let adults = people.filter(person => person.age >= 18);
console.log(adults);