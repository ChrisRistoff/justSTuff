const binary = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  mid = Math.floor((left+right) / 2)

  while (left <= right) {
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


const binaryRecursive = (arr, target, left=0, right=arr.length) => {
  mid = Math.floor((left+right) / 2)

  if (arr[mid] === target) return mid

  if (arr[mid] > target) {
    right = mid - 1
    return binaryRecursive(arr, target, left, right)
  }

  if (arr[mid] < target) {
    left = mid + 1
    return binaryRecursive(arr, target, left, right)
  }

  return -1

}


module.exports = {binary: binary, binaryRecursive: binaryRecursive}
