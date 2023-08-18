//Cat years, Dog years
/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */
export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    // Your code here!
    let y1 :number=15;
    let y2 :number=24;
    let dyde:number=5;
    let cyde:number=4;
    return [humanYears,humanYears==1?y1:humanYears==2?y2:y2+(cyde*(humanYears-2)),humanYears==1?y1:humanYears==2?y2:y2+(dyde*(humanYears-2))];
  }