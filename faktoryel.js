function faktoriyel(n) {
    if (n === 0 || n === 1) {
        return 1; // 0! ve 1! her ikisi de 1'dir
    } 
    return n*faktoriyel(n-1);
}

console.log("faktoryel " + faktoriyel(5))