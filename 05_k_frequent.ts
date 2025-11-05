function topKFrequent (nums: number[], k: number): number[] {
  const freq_map = new Map<number, number>()

  for (const i of nums) {
    freq_map.set(i, (freq_map.get(i) ?? 0) + 1)
  }

  const arr_map = [...freq_map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)

  return arr_map.map(([num]) => num)
}

const res = topKFrequent([1, 1, 1, 2, 2, 3], 2)
console.log(res)
