// Isogram

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

// export function isIsogram(str: string): boolean{
//     let uniqueText=[...new Set(str.toLowerCase())].join('').length
//     return str.length==uniqueText
//    }
export function isIsogram(str: string): boolean{
    return new Set(str.toUpperCase()).size==str.length
  }