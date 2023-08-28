// Remove the first and last character in a string
/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

 function removeChar(str: string): string {
    return str.slice(1,str.length-1)
  }
  console.log(removeChar('helloo'))