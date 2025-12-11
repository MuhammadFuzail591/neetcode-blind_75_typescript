function fruitIntoBaskets (fruits: number[]): number {
  let maxLength = 0

  for (let i = 0; i < fruits.length; i++) {
    for (let j = i; j < fruits.length; j++) {
      const distinct = new Set<number>()
      for (let k = i; k <= j; k++) {
        distinct.add(fruits[k])
      }

      if (distinct.size <= 2) {
        maxLength = Math.max(maxLength, j - i + 1)
      } else {
        break
      }
    }
  }
  return maxLength
}

console.log(fruitIntoBaskets([1, 2, 1, 3]))
