// Linear Search
function linearSearch(arr, target) {
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === target) {
            return "Siz qidirgan narsa bizda bor"
        }
    }
    return "Bunday narsa yo'q"
}
console.log(linearSearch(["Olma", "Anor", "Gilos"], "Gilos")); // Siz qidirgan narsa bizda bor 
console.log(linearSearch(["Olma", "Anor", "Gilos"], "Tarvuz")); // Bunday narsa yo'q 

// Binary Search
function binarySearch(arr, target, left = 0; right = arr.length - 1) {
    if (left > right) {
        return "Bunday narsa yo'q"
    }

    const mid = Math.trunc((left + right) / 2)
    if (arr[mid] === target) {
        return "Topildi"
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right)
    } else {
        return binarySearch(arr, target, left, mid - 1)
    }
}
console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Topild
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Bunday narsa yo'q