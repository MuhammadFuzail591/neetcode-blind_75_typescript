function sortColors (nums: number[]): void {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] > nums[j]) {
        ;[nums[j], nums[i]] = [nums[i], nums[j]]
      }
    }
  }

  console.log(nums)
}

function sortColors2 (nums: number[]): void {
  let left = 0,
    right = nums.length - 1
  let i = 0
  while (i <= right) {
    if (nums[i] === 0) {
      ;[nums[i], nums[left]] = [nums[left], nums[i]]
      left++
      i++
    } else if (nums[i] === 2) {
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    } else {
      i++
    }
  }
}
sortColors([2, 1, 2, 0, 1, 0, 1, 0, 1])
