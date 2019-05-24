function findFactors(num) {
    let factors = [];
    let i = 2;
        while (num !== 1) {
            while (num % i === 0) {
            factors.push(i);
            num = parseInt(num / i);
        }
        i++;
    }
    return factors;
}


self.addEventListener("message", (e) => {
    self.postMessage(findFactors(e.data));
    self.close();
});