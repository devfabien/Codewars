// Check Exam

/* The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */

export function checkExam(array1: string[], array2: string[]): number {
    let result:number[]=[];
    const data = array1.map((item, i) => array2[i] === item ? result.push(4) : array2[i] == '' ? result.push(0) : result.push(-1));
     let ans:number=result.reduce((a:number, b:number)=>a+b);
     
     return ans>0?ans:0
   }
 