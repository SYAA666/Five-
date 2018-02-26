module.exports = function makeExchange(currency) {
    var currentCost = [50, 25, 10, 5, 1];
    var coins = [0, 0, 0, 0, 0];
    var letters = ["H", "Q", "D", "N", "P"];
    if (currency <= 0) {
        return {}
    }
    if (currency >= 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    }
    else {
        for (var i = 0; i <= currentCost.length; i++) {
            while (currency - currentCost[i] >= 0) {
                currency -= currentCost[i];
                coins[i]++;
            }
        }
    }
    let answer = {}
    for (let i = 0; i <= coins.length; i++) {
        if (coins[i] > 0) {
            var letter = letters[i];
            answer[letter] = coins[i];
        }
    }
    return answer
}
