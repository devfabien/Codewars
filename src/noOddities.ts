//No oddities

/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given. */

export function noOdds(values: number[]): number[] {
    return values.filter(value=>value%2==0)
  }