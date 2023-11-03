/* DESCRIPTION:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

export class Kata {
    static disemvowel(str: string): string {
      //regex to check if a character is a vowel
      const regex=/[aeiuo]/gi
      return str.replace(regex,"")
      
    }
  }