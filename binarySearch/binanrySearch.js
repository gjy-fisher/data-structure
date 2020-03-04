function binarySearchLeft(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = (right + left) >>> 1
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

function binarySearchRight(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = (right + left) >>> 1
        if (arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
}

const arr = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]

const arr1 = [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

const arr2 = [4,5,5,7,8,9,10,11]

console.log(binarySearchLeft(arr, 5))
console.log(binarySearchLeft(arr1, 6))
console.log(binarySearchLeft(arr2, 6))

console.log(binarySearchRight(arr, 5))
console.log(binarySearchRight(arr1, 6))
console.log(binarySearchRight(arr2, 6))