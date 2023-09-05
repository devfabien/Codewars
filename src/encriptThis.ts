// Encryipt this

/* Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo" */

export const encryptThis = (str: string): string => {
    // Your code goes here
    if(str.length==0) return ''
  let swapping:string=str.split(" ").map(text=>text.length==1?text:text.split('').map((s,i)=>{
      if(i==1)
      return text[text.length-1]
      else if(i==text.length-1)
      return text[1]
      return s
  }).join('')).join(' ');
    return swapping.split(' ').map((item,i)=>item.replace(item.charAt(0),item.charCodeAt(0).toString())).join(' ')
  }