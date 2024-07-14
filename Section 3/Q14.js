let people = [
    { name: 'Umer', age: 18 },
    { name: 'Usman', age: 15 },
    { name: 'Wal', age: 45 },
    { name: 'Zain', age: 16 }
];
people.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
console.log(people);