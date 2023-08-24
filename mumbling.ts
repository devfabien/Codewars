//Mumbling 
/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */
export function accum(s: string): string {
    let result:string='';
    for(let i=0;i<=s.length-1;i++){
      result+=`${s[i].toUpperCase().concat(s[i].toLowerCase().repeat(i))}-`
    }
    return result.slice(0,-1)
  }