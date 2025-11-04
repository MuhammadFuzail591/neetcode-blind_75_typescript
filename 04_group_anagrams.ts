function groupAnagrams (strs: string[]): string[][] {
  const arr_map = new Map<string, string[]>()

  console.log(arr_map)
  for (const str of strs) {
    const sortedS = str.split('').sort().join('')

    addValueToMap(arr_map, sortedS, str)
  }
  return [...arr_map.values()]
}

function addValueToMap (map: Map<string, string[]>, key: string, value: string) {
  if (!map.has(key)) {
    map.set(key, [])
  }

  map.get(key)!.push(value)
}

