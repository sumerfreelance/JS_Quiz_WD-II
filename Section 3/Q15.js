let items = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'completed' },
    { id: 3, status: 'pending' }
];
let updatedItems = items.map(item => ({
    ...item,
    status: item.status === 'pending' ? 'completed' : item.status
}));
console.log(updatedItems);