function combine(coins, val) {
    var total = [];
    var num = [];

    for(i=0; i < coins.length; i++) {
       let coin1 = coins[i];
       let coin2 = val - coin1;
       if (total.includes(coin2)) {
           num.push(coin1, coin2);
          break;
       }
       total.push(coin1);
    //    console.log(total);
    }
    return `Coins used: ${num.length}. Coins ${num[0]} & ${numused[1]}`;
}

console.log(combine([0, 2, 1, 3, 4], 5));