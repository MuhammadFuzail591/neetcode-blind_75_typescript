function nonOverlappingIntervals (intervals: number[][]) {
  // How to check whether some interval is overlapping
  let count: number = 0
  for (let i: number = 1; i < intervals.length; i++) {
    // Checking overlapping intervals

    if (
      intervals[i][0] <= intervals[i - 1][1] &&
      intervals[i - 1][0] <= intervals[i][1]
    ) {
      console.log(intervals[i - 1] + ' ' + intervals[i] + 'are overlapping')
      count++
    }
  }

  console.log(count)
}

nonOverlappingIntervals([
  [1, 3],
  [3, 5],
  [4, 6],
  [5, 7]
])

// Actual Solution

function eraseOverlapIntervals (intervals: number[][]): number {
  if (intervals.length === 0) {
    return 0
  }
  intervals.sort((a, b) => a[1] - b[1])

  let count: number = 1
  let end: number = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1]
      count++
    }
  }

  return intervals.length - count
}
