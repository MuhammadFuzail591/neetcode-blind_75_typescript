function mergeIntervals (intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  let merged: number[][] = []

  for (let i = 0; i < intervals.length; i++) {
    if (merged.length === 0 || intervals[i][0] > merged[merged.length - 1][1]) {
      merged.push(intervals[i])
    } else {
      merged[merged.length - 1][1] = Math.max(
        intervals[i][1],
        merged[merged.length - 1][1]
      )
    }
  }
  return merged
}

mergeIntervals([
  [3, 5],
  [1, 4],
  [7, 9],
  [6, 8]
])
