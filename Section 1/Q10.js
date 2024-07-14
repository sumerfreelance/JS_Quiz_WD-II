function factorial(n){
    let result = 1;
    let i = n;
    if (n <= 0){
        console.log(1);
    }else{
        do {
            result *= i;
            i--;
        } while (i > 0);
        console.log(result);
    }
}
console.log(factorial(5));