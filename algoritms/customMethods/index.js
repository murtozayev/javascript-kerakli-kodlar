// Map

function customMap(arr, callback) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr))
    }
    return result
}
customMap([1, 2, 3, 4], (item) => {
    console.log(item);
})

// forEach
function customForEach(arr, callback) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr))
    }
    return result
}
customForEach([4, 3, 2, 1], (item) => {
    console.log(item);
})

// Filter
function customFilter(arr, callback) {
    const result = []
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result[counter] = arr[i]
            counter++
        }
    }
    return result
}
customFilter([12, 43, 56], (item) => {
    if (item > 43) {
        console.log(item);
    }
})

// Reducer

function customReduce(arr, callback, initialValue) {
    let value = initialValue

    for (let i = 0; i < arr.length; i++) {
        value = callback(value, arr[i], i, arr)
    }
    return value
}

console.log(customReduce([43, 54, 676], (val, item) => val + item, 0)); // 773

// Some
function customSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true
        }
    }
    return false
}

console.log(customSome([4, 3, 2, 1], (item) => item === 3)); // true

// Every
function customEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false
        }
    }
    return true
}
console.log(customEvery([7, 6, 5, 4, 3], (item) => typeof item === "string")); // false

// Push
function customPush(arr, ...elements) {
    let len = arr.length
    for (let i = 0; i < elements.length; i++) {
        arr[len + i] = elements[i]
    }
    return true
}
let arr = [4, 3, 2, 1]
console.log(customPush(arr, "Hello World")); // true
console.log(arr);

// Pop
function customPop(arr) {
    if (arr.length === 0) return undefined
    let lastelement = arr[arr.length - 1]
    delete arr[arr.length - 1]
    arr.length--
    return lastelement
}

let arr2 = [3, 43, 65, 78, 24]
console.log(customPop(arr2)); // 24
console.log(arr2); // [3, 43, 65, 78]

// Shift
function customShift(arr) {
    if (arr.length === 0) return undefined
    let firstElement = arr[0]
    delete arr[0]
    arr.length--
    return firstElement
}
console.log(customShift(arr2)); // 3

// Unshift
function customUnshift(arr, ...elements) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + elements.length] = arr[i]
    }
    for (let j = 0; j < elements.length; j++) {
        arr[j] = elements[j]
    }
    return arr
}
console.log(customUnshift(arr, "Hello everyone"));
console.log(arr);

// isArray
function customIsArray(arr) {
    return arr instanceof Object && "length" in arr && !isNaN(arr.length)
}
console.log(customIsArray([3, 2, 1])); // true
console.log(customIsArray({ name: "User" })); // false