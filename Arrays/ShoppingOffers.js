/**MEDIUM
 * In LeetCode Store, there are n items to sell. Each item has a price. However, there are some special offers, and a special offer consists of one or more different
 * kinds of items with a sale price. 
 * You are given an integer array price where price[i] is the price of the ith item, and an integer array needs where needs[i] is the number of pieces of the ith 
 * item you want to buy.
 * You are also given an array special where special[i] is of size n + 1 where special[i][j] is the number of pieces of the jth item in the ith offer and 
 * special[i][n] (i.e., the last integer in the array) is the price of the ith offer. Return the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers. You are not allowed to buy more items than you want, even if that would lower the overall price. You could use any of the special offers as many times as you want.
 * 
 * EX1: price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
 * o/p: Output: 14
 * Explanation: There are two kinds of items, A and B. Their prices are $2 and $5 respectively. 
 * In special offer 1, you can pay $5 for 3A and 0B. In special offer 2, you can pay $10 for 1A and 2B. 
 * You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.
 * 
 * EX2:  price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
 * O/P: 11
 * 
 * Approach: Use recurssion. 
 * - Determine the cost of buying items as per the needs array, without applying any offer. Store the result in resres.
 * - Iterate over every offer in the special list. For every offer chosen, repeat steps 3 to 5.
 * - Create a copy of the current needs in a needsBal list(so that the original needs can be used again, while selecting the next offer).
 * - Try to apply the current offer. If possible, update the required number of items in needsBal.
 * - If the current offer could be applied, find the minimum cost out of res and offer price + calcOffer(needsBal). 
 * - Return the res corresponding to the minimum cost.
 */
var shoppingOffers = function (price, special, needs) {
    const actualCost = (needs) => {
        let cost = 0;
        for (let i = 0; i < needs.length; i++) {
            cost += needs[i] * price[i];
        }
        return cost;
    }

    const calcOffer = (needs) => {
        let res = actualCost(needs);
        for (let i = 0; i < special.length; i++) {
            let needsBal = [...needs];
            validOffer = true;
            for (let j = 0; j < special[i].length - 1; j++) {
                if (needsBal[j] < special[i][j]) {
                    needsBal = [...needs];
                    validOffer = false;
                    break;
                } else {
                    needsBal[j] = needsBal[j] - special[i][j];
                }
            }
            if (validOffer) res = Math.min(res, special[i][special[i].length - 1] + calcOffer(needsBal));
            else continue;
        }
        return res;
    }

    return calcOffer(needs);

};

//console.log(shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2]));
console.log(shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1]));
