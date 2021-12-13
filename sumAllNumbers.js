function sumTo(n) {
    //Using a for loop
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += n;
    }
    return sum;

    //Using recurtion
    if (n == 1)
        return 1;
    return n + sumTo(n - 1);
}