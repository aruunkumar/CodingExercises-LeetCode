/**MEDIUM
 * In this challenge, there is a connected undirected graph where each of the nodes is a color. Given a color, find the shortest path connecting any two nodes of 
 * that color. Each edge has a weight of 1. If there is not a pair or if the color is not found, print -1.
 * For ex: given nodes = 5 and edges = 4 and graphFrom = [1,1,2,3] and graphTo = [2,3,4,5]. Colors for each node are [1,2,3,3,2]. Each of the nodes is 
 * labeled [node]/[color] and is colored appropriately. This graph can be represented as
 *                  1/1
 *                 /    \
 *              2/2     3/3
 *               /         \
 *             4/3         5/2 
 * If input color is 2, then shortest path is 3. i.e. node2->node1->node3->node5
 * 
 * Approach: Use BFS. First construct an adjacency list as a hash map. Then iterate the input ids array to find the first color matching the required color. Then 
 * do a BFS from there until we find the same color. We also need to maintain a 'visited' set to ensure there are no cycles
 */

function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    let adjList = new Map();
    const buildAdjList = (source, dest) => {
        let arr;
        for (let i = 0; i < source.length; i++) {
            arr = adjList.get(source[i]);
            if (arr == undefined) {
                arr = [];
                arr.push(dest[i]);
            } else {
                if (!arr.includes(dest[i])) arr.push(dest[i]);
            }
            adjList.set(source[i], arr);
        }
    }

    const doBFS = (vert) => {
        let visited = new Set();
        let q = [];
        let res = 0;
        q.push(vert);
        while (q.length > 0) {
            let len = q.length;
            res++;
            //                 console.log('queue:',q, ' len:', len, ' res:', res);
            for (let j = 0; j < len; j++) {
                let node = q.shift();
                // console.log('Inside inner. Node:', node, ' j:', j);
                if (!visited.has(node)) {
                    visited.add(node);
                    let arr = adjList.get(node);
                    for (let k = 0; k < arr.length; k++) {
                        if (!visited.has(arr[k])) {
                            if (ids[arr[k] - 1] == val) return res;
                            else q.push(arr[k]);
                        }

                    }
                }
            }
        }
        return -1;
    }

    buildAdjList(graphFrom, graphTo);
    buildAdjList(graphTo, graphFrom);
    console.log(adjList);
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] == val) {
            return doBFS(i + 1);
        }
    }
    return -1;

}
