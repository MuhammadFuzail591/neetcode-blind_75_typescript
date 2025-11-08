function productExceptSelf (nums: number[]): number[] {
  const num = nums.length
  let res = new Array(num).fill(1)

  for (let i = 1; i < num; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }

  let postfix = 1
  for (let i = num - 1; i >= 0; i--) {
    res[i] *= postfix
    postfix *= nums[i]
  }

  return res
}

productExceptSelf([1, 2, 3, 4])
