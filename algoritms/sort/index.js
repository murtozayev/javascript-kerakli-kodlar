// Bubble Sort
function bubbleSort(arr) {
    let a = arr.length - 1
    for (let x = 0; x < a; x++) {
        for (let y = 0; y < a - x; y++) {
            if (arr[y] > arr[y + 1]) {
                let z = arr[y]
                arr[y] = arr[y + 1]
                arr[y + 1] = z
            }
        }
    }
    return arr
}
console.log(bubbleSort([2, 1, 4, 3])); // [1, 2, 3 ,4]

// Selection Sort
function selectionSort(arr) {
    let a = arr.length
    for (let x = 0; x < a - 1; x++) {
        let mx = x
        for (let y = x + 1; y < a; y++) {
            if (arr[y] < arr[mx]) mx = y
        }
        if (mx != x) {
            let z = arr[x]
            arr[x] = arr[mx]
            arr[mx] = z
        }
    }
    return arr
}
console.log(selectionSort(["C", "A", "B"]));//["A", "B", "C"]

// Insertion Sort
function insertionSort(arr) {
    let a = arr.length
    for (let x = 0; x < a; x++) {
        let key = arr[x]
        let y = x - 1
        while (y >= 0 && arr[y] > key) {
            arr[y + 1] = arr[y]
            y--;
        }
        arr[y + 1] = key
    }
    return arr
}
console.log(insertionSort([3, 1, 4, 2, 8, 5])); // [1,2,3,4,5,8]

// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const md = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, md))
    const right = mergeSort(arr.slice(md))

    return merge(left, right)
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
console.log(mergeSort(["B", "A", "C"])); // ["A", "B", "C"]

// Quick sort
function quickSort(arr) {
    if (arr.length <= 1) return arr

    const pivat = arr[Math.trunc(arr.length / 2)]
    const left = arr.filter(x => x < pivat)
    const right = arr.filter(x => x > pivat)
    const middle = arr.filter(x => x === pivat)

    return [...quickSort(left), ...middle, ...quickSort(right)]
}
console.log(quickSort([10, 12, 11, 13])); //[10, 11, 12, 13]