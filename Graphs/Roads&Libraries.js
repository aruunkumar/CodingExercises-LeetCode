/**MEDIUM
 * Determine the minimum cost to provide library access to all citizens of HackerLand. There are  n cities numbered from 1 to n. Currently there are no libraries and 
 * the cities are not connected. Bidirectional roads may be built between any city pair listed in 'cities' array. A citizen has access to a library if:
 * 1. Their city contains a library.
 * 2. They can travel by road from their city to a city containing a library.
 * The following figure is a sample map of HackerLand where the lines denote possible roads:
 * 
 *           1
 *        /  |  \
 *       7   3 - 2      5 - 6 - 8
 *  c_road = 2; c_lib = 3
 *  cities = [[1,7], [1,3], [1,2], [2,3], [5,6], [6,8]] 
 * The cost of building any road is 2, and the cost to build a library in any city is 3. Build 5 roads at a cost of 5x2=10 and 2 libraries for a cost of 6.   
 * 
 * Approach: Use DFS. First construct an adjacency list as a hash map. Then iterate the vertices/cities and do a DFS for each. Keep track of visited in order to 
 * avoid cycles. If we are visiting a city for the first time then we increment the no. of roads. IN the main loop if we are encountering a new city that was not 
 * visited before then its in a separate cluster and so calculate the overall cost including a new livrary. Finally return the min of road cost and cost of library
 * in every city.
 * 
 */

function roadsAndLibraries(n, c_lib, c_road, cities) {
    // Write your code here
    let adjList = new Map();
    let visited = new Set();
    let roads = 0;
    const buildAdjList = (source, dest) => {
        let arr;
        arr = adjList.get(source);
        if (arr == undefined) {
            arr = [];
            arr.push(dest);
        } else {
            if (!arr.includes(dest)) arr.push(dest);
        }
        adjList.set(source, arr);
    }



    const doDFS = (node) => {
        if (!visited.has(node)) {
            visited.add(node);
            let connected = adjList.get(node);
            if (connected != undefined) {
                connected.forEach(e => {
                    if (!visited.has(e)) {
                        roads++;
                        doDFS(e);
                    }
                });
            }
        }
    }

    for (let i = 0; i < cities.length; i++) {
        buildAdjList(cities[i][0], cities[i][1]);
        buildAdjList(cities[i][1], cities[i][0]);
    }

    let roadCost = 0;
    for (let j = 1; j <= n; j++) {
        if (!visited.has(j)) {
            roads = 0;
            doDFS(j);
            roadCost = roadCost + (roads * c_road) + c_lib;
        }

        //        console.log('Roads:', roadCost);
    }
    return Math.min(roadCost, n * c_lib);

}