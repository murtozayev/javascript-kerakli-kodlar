// Linear Search
function linearSearch(arr, target) {
    for(let x = 0; x < arr.length; x++) {
        if(arr[x] === target) {
            return "Siz qidirgan narsa bizda bor"
        }
    }
    return "Bunday narsa yo'q"
}
console.log(linearSearch(["Olma", "Anor", "Gilos"], "Gilos")); // Siz qidirgan narsa bizda bor 
console.log(linearSearch(["Olma", "Anor", "Gilos"], "Tarvuz")); // Bunday narsa yo'q 