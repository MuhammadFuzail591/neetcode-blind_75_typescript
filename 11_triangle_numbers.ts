function triangleNumber (nums: number[]): number {
  let count = 0
  nums.sort((a, b) => a - b)

  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0
    let right = i - 1

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left
        right--
      } else {
        left++
      }
    }
  }

  return count
}

const res = triangleNumber([11, 4, 9, 6, 15, 18])
console.log(res)
