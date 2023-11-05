import {bubbleSort} from "../../algo/bubbleSort"

describe('test bubbleSort()', () => {
  it('should return a sorted array', () => {
    const arr = [2,3,1,7,4,2,1,16,12]
    const arr2 = [4,5,12,5235,532,123,546,245,4252,1441]

    expect(bubbleSort(arr)).toEqual([1, 1,  2,  2, 3, 4, 7, 12, 16])
    expect(bubbleSort(arr2)).toEqual([4, 5, 12, 123, 245, 532, 546, 1441, 4252, 5235])
  })

  it('should mutate the array and not return a new one', () => {
    const arr2 = [4,5,12,5235,532,123,546,245,4252,1441]

    expect(bubbleSort(arr2)).toBe(arr2)
  })
})

