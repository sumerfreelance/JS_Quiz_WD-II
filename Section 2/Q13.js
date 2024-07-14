function calculateTax(income) {
    let taxRate = income > 50000 ? 0.2 : 0.1;
    return income * taxRate;
}
console.log(calculateTax(60000));
console.log(calculateTax(40000));