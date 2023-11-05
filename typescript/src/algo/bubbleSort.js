"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseBubbleSort = exports.bubbleSort = void 0;
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > i; j--) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
exports.bubbleSort = bubbleSort;
function reverseBubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > i; j--) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
exports.reverseBubbleSort = reverseBubbleSort;
console.log(reverseBubbleSort([2, 3, 1, 7, 4, 2, 1, 16, 12]));
