//
/* If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

export function countSheep(num: number): string {
    let result:string='';
    for(let i=1;i<=num;i++){
      result+=`${i} sheep...`
    }
    return result
  }