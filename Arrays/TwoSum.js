const TwoSum = (nums, target) => {
    let list = new Map();
    let res=[];
    for(let i=0; i< nums.length; i++) {
        if (list.has(target-nums[i])) {
            console.log('found match');
            res.push(i, list.get(target-nums[i]));
            return res;
        } else list.set(nums[i], i)
        console.log('list:', list);
    };
}

console.log(TwoSum([3,2,4],6));