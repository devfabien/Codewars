//Sum of Numbers
/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the ex */
export function getSum(a: number, b: number): number {
    const arr:number[]=[a,b].sort((a,b)=>a-b);
    let[c,d]=arr;
    if(a==b) return a;
   let sum:number=0
    while(c<=d){
          sum+=c;
  c++;
    }
    return sum
  }