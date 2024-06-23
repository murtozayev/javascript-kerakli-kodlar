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