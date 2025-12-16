function longestSubstring (s: string): number {
  let max_length = 0
  let start = 0
  let seen: { [key: string]: number } = {}

  for (let i = 0; i < s.length; i++) {
    seen[s[i]] = (seen[s[i]] || 0) + 1
    while (seen[s[i]] > 1) {
      seen[s[start]]--
      start++
    }

    max_length = Math.max(max_length, i - start + 1)
  }

  return max_length
}



longestSubstring('abcabcbb')
