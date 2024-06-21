// Stack LIFO in class
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