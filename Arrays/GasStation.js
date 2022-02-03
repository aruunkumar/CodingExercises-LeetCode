/**MEDIUM
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with 
an empty tank at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise 
return -1. If there exists a solution, it is guaranteed to be unique
EX1: Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3

EX2: Input: gas = [2,3,4], cost = [3,4,3]
Output: -1

Approach: Start from the station where gas is more than cost. Then continue until tank is empty or we reached the starting station.
*/

var canCompleteCircuit = function (gas, cost) {

    for (let i = 0; i < gas.length; i++) {
        if (gas[i] >= cost[i]) {
            let tank = 0;
            let j = 0;
            if (i < gas.length - 1) j = i + 1;
            tank += gas[i] - cost[i];
            while (tank > 0 && j != i) {
                tank += gas[j] - cost[j];
                j++;
                if (j >= gas.length) j = 0;
            }
            if (tank >= 0 && j == i) return i;
        }
    }
    return -1;

};