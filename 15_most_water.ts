function maxArea (heights: number[]): number {
  let left: number = 0,
    right: number = heights.length - 1
  let currentMax: number = 0

  while (left < right) {
    let width: number = right - left
    let height: number = Math.min(heights[left], heights[right])
    let currentArea: number = width * height

    currentMax = Math.max(currentMax, currentArea)

    if (heights[left] < heights[right]) {
      left++
    } else {
      right--
    }
  }

  return currentMax
}

function most_water (height: number[]): number {
  let maxArea = 0

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let width = j - i
      let h = Math.min(height[i], height[j])
      let currentArea = width * h

      maxArea = Math.max(maxArea, currentArea)
    }
  }
  return maxArea
}
