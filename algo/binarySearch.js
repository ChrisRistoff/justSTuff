let arr = []

for (let i = 0; i < 10000; i++) {
  arr.push(Math.round(Math.random() * 10000))
}

const binary = (arr, target) => {
  arr = arr.sort((a, b) => a-b)
  let left = 0
  let right = arr.length - 1
  mid = Math.floor((left+right) / 2)

  while (left < right) {
    if (arr[mid] === target) return mid

    if (arr[mid] > target) {
      right = mid - 1
      mid = Math.floor((left+right) / 2)
    } else {
      left = mid + 1
      mid = Math.floor((left+right) / 2)
    }
  }

  return -1
}

arr = arr.sort((a, b) => a-b)

const binaryRecursive = (arr, target, left=0, right=arr.length) => {
  mid = Math.floor((left+right) / 2)

  if (left > right) return -1

  if (arr[mid] === target) return mid

  if (arr[mid] > target) {
    right = mid - 1
    return binaryRecursive(arr, target, left, right)
  }

  if (arr[mid] < target) {
    left = mid + 1
    return binaryRecursive(arr, target, left, right)
  }

}

console.log(binaryRecursive(arr, 3801))
