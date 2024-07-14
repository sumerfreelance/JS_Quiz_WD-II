// Original Object
const original = { name: 'Syed Umer Shah', address: { city: 'Karachi' } };

// 1. Reference Copy
const referenceCopy = original;

// 2. Shallow Copy
const shallowCopy = { ...original };

// 3. Deep Copy
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the copied objects
referenceCopy.address.city = 'Lahore'; // Affects both original and referenceCopy
shallowCopy.address.city = 'Islamabad'; // Affects original and shallowCopy
deepCopy.address.city = 'Sawat'; // Only affects deepCopy

// Display results
console.log('Original:', original);
console.log('Reference Copy:', referenceCopy);
console.log('Shallow Copy:', shallowCopy);
console.log('Deep Copy:', deepCopy);