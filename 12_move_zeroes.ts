function moveZeroes (nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }

  console.log(nums)
}

function moveZeroes2 (nums: number[]): void {
  let nextNonZero: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[nextNonZero], nums[i]] = [nums[i], nums[nextNonZero]]
      nextNonZero++
    }
  }
}

function moveZeroes3 (nums: number[]): void {
  let strIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[strIndex] = nums[i]
      strIndex++
    }
  }

  for (let i = strIndex; i < nums.length; i++) {
    nums[i] = 0
  }
}

moveZeroes3([2, 0, 4, 0, 9])
