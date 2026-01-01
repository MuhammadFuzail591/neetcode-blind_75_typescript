function maxScore (cardPoints: number[], k: number): number {
  let state: number = 0
  let start: number = 0
  let max_points: number = 0
  let total: number = cardPoints.reduce((a, b) => a + b)

  if (k >= cardPoints.length) {
    return total
  }

  for (let end = 0; end < cardPoints.length; end++) {
    state += cardPoints[end]

    if (end - start + 1 == cardPoints.length - k) {
      max_points = Math.max(total - state, max_points)
      state -= cardPoints[start]
      start += 1
    }
  }

  console.log(max_points)
  return max_points
}

maxScore([1, 2, 3, 4, 5, 6, 1], 3)
