// My First try
function nonOverlappingIntervals (intervals: number[][]) {
  // How to check whether some interval is overlapping
  let count: number = 0
  for (let i: number = 1; i < intervals.length; i++) {
    // Checking overlapping intervals

    if (intervals[i][0] < intervals[i - 1][1]) {
      count++
    }
  }
  return count
}

nonOverlappingIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3]
])
