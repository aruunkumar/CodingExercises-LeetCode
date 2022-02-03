"use strict";

/**
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.


Sample Input:

student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]



 Sample output:

find_pairs(student_course_pairs_2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
} 

Sample Input:
student_course_pairs_3 = [
  ["23", "Software Design"], 
  ["3", "Advanced Mechanics"], 
  ["2", "Art History"], 
  ["33", "Another"],
]


Sample output:

find_pairs(student_course_pairs_3) =>
{
  "23,3": []
  "23,2": []
  "23,33": []
  "3,2": []
  "3,33": []
  "2,33": []
}


n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)


**/

const studentCoursePairs1 = [
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"],
    ["58", "Software Design"]
];

const studentCoursePairs2 = [
    ["0", "Advanced Mechanics"],
    ["0", "Art History"],
    ["1", "Course 1"],
    ["1", "Course 2"],
    ["2", "Computer Architecture"],
    ["3", "Course 1"],
    ["3", "Course 2"],
    ["4", "Algorithms"]
];

const studentCoursePairs3 = [
    ["23", "Software Design"],
    ["3", "Advanced Mechanics"],
    ["2", "Art History"],
    ["33", "Another"]
];

const find_pairs = (pairs) => {
    let courseMap = new Map();
    let uniqueIds = new Set();
    pairs.map(([id, course]) => {
        uniqueIds.add(id);
        if (courseMap.has(id)) {
            let courseList = courseMap.get(id);
            courseList.push(course);
            courseMap.set(id, courseList);
        } else {
            courseMap.set(id, [course]);
        }
    });
    console.log('Map:', courseMap);
    console.log('Set:', uniqueIds);
    let res = new Map();
    let uniqueId_arr = [...uniqueIds];
    for (let i = 0; i < uniqueId_arr.length - 1; i++) {
        let matching;
        let id1 = uniqueId_arr[i];
        let id2;
        let courses_id1 = courseMap.get(id1);
        for (let j = i + 1; j < uniqueId_arr.length; j++) {
            id2 = uniqueId_arr[j];
            let courses_id2 = courseMap.get(id2);
            matching = courses_id2.filter(e => courses_id1.includes(e));
            let key = id1.toString() + "," + id2.toString();
            res.set(key, matching);
        }

    }
    console.log(res);

}

console.log(find_pairs(studentCoursePairs1));

