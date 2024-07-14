let orders = [
    { id: 1, amount: 100, status: 'completed' },
    { id: 2, amount: 50, status: 'pending' },
    { id: 3, amount: 180, status: 'completed' }
];
let totalCompleted = orders
    .filter(order => order.status === 'completed')
    .reduce((acc, order) => acc + order.amount, 0);
console.log(totalCompleted);