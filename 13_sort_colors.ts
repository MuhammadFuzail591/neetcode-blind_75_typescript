function sortColors (nums: number[]): void {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[j], nums[i]] = [nums[i], nums[j]]
      }
    }
  }

  console.log(nums)
}

sortColors([2, 1, 2, 0, 1, 0, 1, 0, 1])
