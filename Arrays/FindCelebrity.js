/** MEDIUM
 * Suppose you are at a party with n people (labeled from 0 to n - 1), and among them, there may exist one celebrity. The definition of a celebrity is that all 
 * the other n - 1 people know him/her, but he/she does not know any of them.

You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n). There will be exactly one celebrity 
if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

* Approach: 
Ex: 0,1,2,3,4,5
If 0 knows 1 then 0 is not a celebrity. Otherwise 0 is a possible celebrity. Continue with this approach till the end of the list to narrow down a possible candidate.
Then check if all persons before the celeb know the celeb and celeb doesnt know them. Similarly check if all persons after the celeb know the celeb. We don't need to 
check if celeb doesnt know the persons in front as we already did that in the 1st loop.  
*/
/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */

var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        let celeb = 0;
        for (let i = 0; i < n - 1; i++) {
            if (knows(celeb, i + 1)) {
                celeb = i + 1;
            }
        }
        for (let j = 0; j < celeb; j++) {
            if (knows(celeb, j)) return -1;
            if (!knows(j, celeb)) return -1;
        }
        for (let k = celeb + 1; k < n; k++) {
            if (!knows(k, celeb)) return -1;
        }

        return celeb;
    };
};