// Stack LIFO ( Last In First Out) in class
class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.items.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString());
    }
}

let stack = new Stack()

stack.push(10)
stack.push(100)
stack.push(1000)
stack.print() // 10, 100, 1000
stack.pop() //10, 100
stack.peek() // 100
stack.size() // 2
stack.isEmpty() // false

// Stack LIFO Browser History function
class BrowserHistory {
    constructor() {
        this.history = []
        this.currentPage = null
    }
    visit(page) {
        if (this.currentPage) {
            this.history.push(this.currentPage)
        }
        this.currentPage = page
        console.log(`Visited: ${page}`);
    }
    back() {
        if (this.history.length > 0) {
            this.currentPage = this.history.pop()
            console.log(`Returned page: ${this.currentPage}`);
        } else {
            console.log("There is no page for back");
        }
    }
}

let browserHistory = new BrowserHistory()
browserHistory.visit("www.google.com") // Visited: www.google.com 
browserHistory.visit("www.youtube.com") // Visited: www.youtube.com
browserHistory.visit("Video 1") // Visited: Video 1
browserHistory.back() // Returned Page: // www.youtube.com
console.log(browserHistory.currentPage) // www.youtube.com

// Queue FIFO ( First In First Out ) in class
class Queue {
    constructor() {
        this.result = []
    }
    enqueue(element) {
        this.result.push(element)
    }
    deQueue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.result.shift()
    }
    front() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.result[0]
    }
    isEmpty() {
        return this.result.length === 0
    }
    size() {
        return this.result.length
    }
    clear() {
        return this.result = []
    }
}

let queue = new Queue()
queue.enqueue("Welcome to my channel")
queue.enqueue("Welcome to my page")
queue.enqueue("Welcome to my blog")
queue.deQueue()
queue.front() // Welcome to my page 

// Live Chat Queue
class ChatQueue extends Queue {
    constructor() {
        super()
    }
    addMessage(user, message) {
        const time = new Date().toLocaleTimeString()
        this.enqueue({ user, message, time })
    }
    dispayeChat() {
        while (!this.isEmpty()) {
            const { user, time, message } = this.deQueue()
            console.log(`[${time}] ${user}: ${message}`);
        }
    }
}

let chat = new ChatQueue()
chat.addMessage("Albert", "Hello my friend")
chat.addMessage("Jessica", "How are you")
chat.addMessage("Tomas", "Nice to meet you")
chat.dispayeChat()

// Hash table in class

class HashTable {
    constructor(size = 50) {
        this.table = new Array(size)
        this.size = size
    }
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key; i++) {
            hash = (hash + key.charCodeAt(i) * i) / this.size
        }
        return hash
    }
    set(key, value) {
        let index = this._hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        return this.table[index].push([key, value])
    }
    get(key) {
        let index = this._hash(key)
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1]
                }
            }
        }
        return undefined
    }
    remove(key) {
        let index = this._hash(key)
        if (this.table[index]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1)
                    return true
                }
            }
            return false
        }
    }
    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

let hash = new HashTable()
hash.set("number", 10)
hash.set("string", "10")
hash.set("boolean", false)
hash.display()
console.log(hash.get('number'));
hash.remove("number")
hash.display()

// SetHandle in Array

class HandleSet {
    constructor() {
        this.result = []
    }
    add(value) {
        if (this.result.includes(value)) return
        this.result.push(value)
    }
    delete(value) {
        if (this.result.includes(value)) {
            this.result.pop()
        }
        return null
    }
    has(value) {
        if (this.result.includes(value)) return true
        else return false
    }
    size() {
        return this.result.length
    }
    clear() {
        this.result = []
    }
}

const set = new HandleSet()

set.add(1)
set.add(2)
set.add(3)
set.add(1) // Doesn't add because 1 already added

set.has(3) // true
set.has(4) // false

set.delete(2) // Removed

set.clear() // Cleaned

// Set
const setA = new Set([1, 2, 3])
const setB = new Set([3, 4, 5])

const union = new Set([...setA, ...setB]) // 1, 2, 3, 4, 5
const intersection = new Set([...setA].filter(x => setB.has(x))) // 3
const difference = new Set([...setA].filter(x => !set.has(x))) // 1, 2

// BST ( Binary Search Tree )

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
}

// Insert BST

BinarySearchTree.prototype._insert = function (value) {
    const node = new Node(value)

    if (this.root === null) {
        this.root = node
        return this
    }

    let current = this.root
    while (true) {
        if (value < current.value) {
            if (current.left === null) {
                current.left = node
                return this
            }
            current = current.left
        } else {
            if (current.right === null) {
                current.right = node
                return this
            }
            current = current.right
        }
    }
}

// Find BST

BinarySearchTree.prototype._find = function (value) {
    if (this.root === null) return false

    let current = this.root
    let found = false

    while (current && !found) {
        if (value < current.value) {
            current = current.left
        } else if (value > current.value) {
            current = current.right
        } else {
            found = true
        }
    }
    if (!found) return false
    return true
}

BinarySearchTree.prototype._remove = function (value) {
    const removeNode = (node, value) => {
        if (node === null) {
            return null
        }
        if (value === node.value) {
            if (node.left === null && node.right === null) {
                return null
            }
            if (node.left === null) {
                return node.right
            }
            if (node.right === null) {
                return node.left
            }

            let tempNode = this.getMin(node.right)
            node.value = tempNode.value
            node.right = removeNode(node.right, tempNode.value)
            return node
        } else if (value < node.value) {
            node.left = removeNode(node.left, value)
            return node
        } else {
            node.right = removeNode(node.right, value)
            return node
        }
    }
    this.root = removeNode(this.root, value)
}

BinarySearchTree.prototype.getMin = function (node) {
    while (node.left !== null) {
        node = node.left
    }
    return node
}

// InOrderTraversal BST
BinarySearchTree.prototype.inOrderTraversal = function (node, result = []) {
    if (node !== null) {
        this.inOrderTraversal(node.left, result)
        result.push(node.value)
        this.inOrderTraversal(node.right, result)
    }
    return result
}

const bst = new BinarySearchTree()
bst._insert(20)
bst._insert(30)
console.log(bst._find(30)); // True
console.log(bst._find(22)); // False
bst._remove(30) // Removed
console.log(bst._find(30)); // False
console.log(bst.inOrderTraversal(bst.root));