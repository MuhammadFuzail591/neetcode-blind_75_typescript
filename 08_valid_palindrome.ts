function isValidPalindrome (str: string): boolean {
  const newStr = str.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase()

  let matchStr = ''

  for (const char of newStr) {
    matchStr = char + matchStr
  }

  return newStr === matchStr ? true : false
}

const res = isValidPalindrome('Was it a car or a cat I saw?')
console.log(res)
