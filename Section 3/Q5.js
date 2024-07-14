let items = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'pending' }
];
let item = items.find(item => item.id === 2);
if (item) {
    item.status = 'completed';
}
console.log(items);