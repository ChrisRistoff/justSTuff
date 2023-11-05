export const bubbleSort = (arr: string[] | number[]): void => {

  for (let i = 0; i < arr.length; i++) {

    for (let j = arr.length; j > i; j--) {

      if(arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

}


export const reverseBubbleSort = (arr: number[]): void => {

  for (let i = 0; i < arr.length; i++) {

    for (let j = arr.length; j > i; j--) {
      if(arr[i] < arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

}

