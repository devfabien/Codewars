//fix string case
/*  */
export function solve(s: string) {
    let upper:number=0;
    let lower:number=0;
    for (let i=0;i<s.length;i++){
      if(s[i]>="A" && s[i]<="Z"){upper++;}
      else{
        
      lower++;
      }
    }
    return upper<=lower?s.toLowerCase():s.toUpperCase()
  }