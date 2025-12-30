function maxSubarraySum (nums: number[], k: number): number {
  let seen = new Set<number>()
  let state = 0
  let start = 0
  let max_sum = 0

  for (let end = 0; end < nums.length; end++) {
    while (seen.has(nums[end])) {
      seen.delete(nums[start])
      state -= nums[start]
      start++
    }

    seen.add(nums[end])
    state += nums[end]

    if (end - start + 1 == k) {
      max_sum = Math.max(max_sum, state)
      seen.delete(nums[start])
      state -= nums[start]
      start += 1
    }
  }
  return max_sum
}

maxSubarraySum([1, 1, 1, 7, 8, 9], 3)
