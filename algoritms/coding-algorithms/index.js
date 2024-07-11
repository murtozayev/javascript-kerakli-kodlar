// Memoization Fibonacci
function memoFib(n, memo = {}) {
    if (n <= 1) return n
    if (memo[n]) return memo[n]

    memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo)

    return memo[n]
}
console.log(memoFib(11)); // 89

// Tabulation Fibonacci
function TabFib(n) {
    if (n <= 1) return n;

    let fibTab = [0, 1]
    for (let i = 2; i <= n; i++) {
        fibTab[i] = fibTab[i - 1] + fibTab[i - 2]
    }
    return fibTab[n]
}
console.log(TabFib(10)); // 55