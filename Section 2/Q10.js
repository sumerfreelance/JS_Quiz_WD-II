let users = [
    { name: 'Umer', address: { city: 'Karachi' } },
    { name: 'Usman' }
];

for (let user of users) {
    console.log(user.address?.city);
}