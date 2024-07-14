let person = {
    name: 'Syed Umer Shah',
    age: 18,
    city: 'Karachi'
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}