let user = {
    name: 'Syed Umer Shah',
    address: {
        city: 'Karachi'
    }
};
let city = user?.address?.city;
console.log(city);
console.log(user);