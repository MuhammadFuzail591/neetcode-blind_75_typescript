function longestConsecutive (nums: number[]): number {
  const numSet = new Set(nums)
  let longest = 0

  for (const item of numSet) {
    if (!numSet.has(item - 1)) {
      let length = 1

      while (numSet.has(item + length)) {
        length += 1
      }

      longest = Math.max(length, longest)
    }
  }
  return longest
}

longestConsecutive([2, 20, 4, 10, 3, 4, 5])
