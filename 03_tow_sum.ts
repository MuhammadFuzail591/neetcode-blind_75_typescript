function twoSum (nums: number[], target: number): number[] {
  let value_object: { [index: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    value_object[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]

    if (
      value_object[difference] !== undefined &&
      value_object[difference] !== i
    ) {
      return [i, value_object[difference]]
    }
  }

  return []
}

let res = twoSum([2, 3, 4, 5], 5)
console.log(res)

function twoSum2 (nums: number[], target: number): (number | undefined)[] {
  const value_map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    value_map.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]

    if (value_map.has(difference) && value_map.get(difference) !== i) {
      return [i, value_map.get(difference)]
    }
  }

  return []
}

let res2 = twoSum2([2, 3, 4, 5], 5)
console.log(res2)
