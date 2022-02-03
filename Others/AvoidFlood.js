// There are an infinite number of lakes. If it rains over a lake which is already full 
// there will be a flood. Your goal is to avoid the flood in any lake.
// Given an integer array rains where:
// rains[i] > 0 means there will be rains over the rains[i] lake.
// rains[i] == 0 means there are no rains this day and you can choose one lake this day and dry it.
// Return an array ans where:
// ans.length == rains.length
// ans[i] == -1 if rains[i] > 0.
// ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
// If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.

// Concept - Keep a Map of lakes that got rain and the day on which they got rain. Keep a Set of dry days.
// If a lake is already in the Map then we need to see if it can be dried prior. For this we need to check if there is an 
//available dry day before the day the lake will get rain. If it cannot be dried then we return [].

// if rains[i] > 0, ans[i] = -1
// for every repeat rains[i] (lake), there has to be a 0 in between repeats
// ORDER MATTERS
var avoidFlood = function(rains) {
    let stackOfZeros = []
    let ans = new Array(rains.length).fill(-1)
    
    let fullLakes = new Map() // {lake: index}
    let dryDays = new Set() // [indices with 0]
    for (let i = 0; i < rains.length; i++){
        if (rains[i] === 0) {
            dryDays.add(i)
            ans[i] = 0
        } else {
            if (!fullLakes.has(rains[i])) { // set {lake => index}
                fullLakes.set(rains[i], i)
            } else { // lake is full, check if a 0 is between current i and prev index
                let previous = fullLakes.get(rains[i])
                if (dryDays.size === 0) return []
                let dryLake = false // see if the lake can be dried
                for(let day of dryDays.keys()){
                    if (previous < day && day < i){
                        ans[day] = rains[i] // dry the lake
                        dryDays.delete(day) // remove the 0
                        fullLakes.set(rains[i], i) // reset when lake is refilled
                        dryLake = true // able to dry a lake
                        break
                    } 
                }
                if (!dryLake){ // couldn't dry
                    return []
                }
            }
        }
    }
    // remaining 0s get assigned 
    for (let i = 0; i < ans.length; i++){
        if (ans[i] === 0) {
            ans[i] = 1
        }
    }
    return ans
}