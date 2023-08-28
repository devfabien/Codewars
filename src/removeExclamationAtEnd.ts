// Exclamation marks series #1: Remove an exclamation mark from the end of string
/* Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi" */

export function remove(s: string): string {
    if(s.charAt(s.length-1)=='!')return s.slice(0,-1)
    return s
    }