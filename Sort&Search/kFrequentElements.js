//MEDIUM
//Given an integer array nums and an integer k, return the k most frequent elements. 
//You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

//Solution:
//Use 2 Maps, 1 where key=element, value=no.of occurences. 
// 2nd a reverse map where key=count, value=array of elements that have that count. ex: 5:[2,8,12] ==> elements 2,8,12 have occured 5 times
// As we store data in the maps, if a count of an element increases we also need to remove its occurrence from current position in map2 and put under new key 
// After iterating the entire input, get the values() from the map2 in reverse order

var topKFrequent = function (nums, k) {
    let map1 = new Map();
    let map2 = new Map();
    let val, cnt;
    let arr1, arr2 = [];
    map2.set(1, arr2);
    for (n of nums) {
        if (map1.has(n)) {
            cnt = map1.get(n);
            map1.set(n, cnt + 1);
            if (map2.has(cnt)) {
                val = map2.get(cnt);
                val.splice(val.indexOf(n), 1);
                map2.set(cnt, val);
            }
            if (map2.has(cnt + 1)) {
                val = map2.get(cnt + 1);
                val.push(n);
                map2.set(cnt + 1, val);
            } else {
                arr1 = [];
                arr1.push(n);
                map2.set(cnt + 1, arr1)
            }
        } else {
            map1.set(n, 1);
            arr2 = map2.get(1);
            arr2.push(n);
            map2.set(1, arr2);
        }
    }

    let mapVals = Array.from(map2.values());
    console.log(mapVals);
    let res = [];
    let i = mapVals.length - 1;
    while (res.length < k) {
        res.push(...mapVals[i]);
        i--;
    }

    if (res.length > k) res = res.slice(0, k + 1);
    return res;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));


//Java solution using priority queue

// class Solution {
//     public int[] topKFrequent(int[] nums, int k) {
//         Map<Integer, Integer> count = new HashMap();
//         for (int n : nums) {
//             count.put(n, count.getOrDefault(n,0)+1);
//         }
//         Queue<Integer> heap = new PriorityQueue<>(
//             (n1,n2) -> count.get(n2) - count.get(n1)); //Use max heap

//         for (int n : count.keySet()) {
//             heap.add(n);
//         }


//         int [] res = new int[k];
//         for (int i = 0; i<k; i++) {
//             res[i] = heap.poll();
//         }
//         return res;
//     }
// }