import {bubbleSort, reverseBubbleSort} from "../../algo/bubbleSort"

describe('test bubbleSort()', () => {
  it('should sort the array', () => {
    const arr = [2,3,1,7,4,2,1,16,12]
    const arr2 = [4,5,12,5235,532,123,546,245,4252,1441]

    bubbleSort(arr)
    bubbleSort(arr2)

    expect(arr).toEqual([1, 1,  2,  2, 3, 4, 7, 12, 16])
    expect(arr2).toEqual([4, 5, 12, 123, 245, 532, 546, 1441, 4252, 5235])
  })

  it('should sort the array in reverse roder', () => {
    const arr = [2,3,1,7,4,2,1,16,12]
    const arr2 = [4,5,12,5235,532,123,546,245,4252,1441]

    reverseBubbleSort(arr)
    reverseBubbleSort(arr2)
    expect(arr2).toEqual([5235, 4252, 1441, 546, 532, 245, 123, 12, 5, 4])
    expect(arr).toEqual([16, 12, 7, 4, 3, 2, 2, 1, 1])
  })
})

