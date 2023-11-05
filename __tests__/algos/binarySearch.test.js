const {binary, binaryRecrusive, binaryRecursive} = require("../../algo/binarySearch")

describe('test binary()', () => {
  it('should return the index of the item if it is in the array and -1 if it is not', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    expect(binary(arr, 7)).toBe(6)
    expect(binary(arr, 4)).toBe(3)
    expect(binary(arr, 11)).toBe(10)
    expect(binary(arr, 10)).toBe(9)
    expect(binary(arr, 16)).toBe(15)
    expect(binary(arr, 1)).toBe(0)

    expect(binary(arr, 18)).toBe(-1)
    expect(binary(arr, 19)).toBe(-1)
    expect(binary(arr, 22)).toBe(-1)
    expect(binary(arr, -3)).toBe(-1)
    expect(binary(arr, -20)).toBe(-1)
    expect(binary(arr, 322)).toBe(-1)
  })
})

describe('test binaryRecursive()', () => {
  it('should return the index of the item if it is in the array and -1 if it is not', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    expect(binaryRecursive(arr, 7)).toBe(6)
    expect(binaryRecursive(arr, 4)).toBe(3)
    expect(binaryRecursive(arr, 11)).toBe(10)
    expect(binaryRecursive(arr, 10)).toBe(9)
    expect(binaryRecursive(arr, 16)).toBe(15)
    expect(binaryRecursive(arr, 1)).toBe(0)

    expect(binaryRecursive(arr, 18)).toBe(-1)
    expect(binaryRecursive(arr, 19)).toBe(-1)
    expect(binaryRecursive(arr, 22)).toBe(-1)
    expect(binaryRecursive(arr, -3)).toBe(-1)
    expect(binaryRecursive(arr, -20)).toBe(-1)
    expect(binaryRecursive(arr, 322)).toBe(-1)
  })
})
