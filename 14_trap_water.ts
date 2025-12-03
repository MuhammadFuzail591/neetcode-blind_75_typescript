function trap (height: number[]): number {
  let count: number = 0
  let left: number = 0
  let right: number = height.length - 1
  let leftMax: number = height[left]
  let rightMax: number = height[right]

  while (left < right) {
    if (leftMax < rightMax) {
      left++
      if (height[left] >= leftMax) leftMax = height[left]
      else count += leftMax - height[left]
    
   } else {
      right--

      if (height[right] >= rightMax) rightMax = height[right]
      else count += rightMax - height[right]
    }
  }

  return count
}

console.log(trap([4, 2, 0, 3, 2, 5]))
