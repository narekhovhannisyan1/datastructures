class StackClass {
    capacity;
    data = [];
    constructor(capacity) {
        this.capacity = capacity;
    }
    push(val) {
        if (this.isFull())
            throw Error("Stack is full");
        this.data.push(val);
    }
    pop() {
        if (this.isEmpty())
            throw Error("Stack is empty");
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    size() {
        return this.data.length;
    }
    isFull() {
        return this.data.length === this.capacity;
    }
    isEmpty() {
        return this.data.length === 0;
    }
}
export {};
