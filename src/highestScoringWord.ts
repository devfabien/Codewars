// Highest Scoring Word

/* DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

export const high = (str: string): string =>{
    let arr:string[]=[]
    for(let i=97;i<=122;i++){
      arr.push(String.fromCharCode(i))
    }
    let sums:number[]=str.split(' ').map((item)=>item.split('').map((el,i)=>arr.indexOf(el)+1).reduce((a,b)=>a+b));
  let index:number=sums.indexOf(Math.max(...sums))
  return str.split(' ')[index]
   
  }