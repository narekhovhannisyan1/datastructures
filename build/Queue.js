class QueueClass {
    data = [];
    capacity = 0;
    constructor(length) {
        this.capacity = length;
    }
    enQueue(val) {
        if (this.isFull())
            throw Error("Queue is full");
        this.data.push(val);
    }
    deQueue() {
        if (this.isEmpty())
            throw Error("Queue is empty");
        return this.data.shift();
    }
    size() {
        return this.data.length;
    }
    isEmpty() {
        return this.data.length <= 0;
    }
    isFull() {
        return this.data.length >= this.capacity;
    }
}
const q = new QueueClass(3);
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
console.log(q.isFull());
console.log(q.deQueue());
console.log(q.size());
console.log(q.isEmpty());
export {};
