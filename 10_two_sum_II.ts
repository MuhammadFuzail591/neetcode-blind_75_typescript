function twoSum (numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    let result = numbers[left] + numbers[right]

    if (result === target) {
      return [left + 1, right + 1]
    }

    if (result < target) {
      left += 1
    }

    if (result > target) {
      right -= 1
    }
  }

  return []
}

function twoSum2 (numbers: number[], target: number): number[] {
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
    }
  }
  return []
}

console.log(twoSum2([2, 7, 11, 15], 9))
