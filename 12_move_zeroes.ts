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

moveZeroes([2, 0, 4, 0, 9])
