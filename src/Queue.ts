interface QueueInterface {
  enQueue(dataItem: number): void;
  deQueue(): number | undefined;
  isEmpty(): boolean;
  isFull(): boolean;
  size(): number;
}

class QueueClass implements QueueInterface {
  private data: Array<number> = [];
  private capacity: number = 0;

  constructor(length: number) {
    this.capacity = length;
  }

  public enQueue(val: number): void {
    if (this.isFull()) throw Error("Queue is full");
    this.data.push(val);
  }

  public deQueue(): number | undefined {
    if (this.isEmpty()) throw Error("Queue is empty");
    return this.data.shift();
  }

  public size(): number {
    return this.data.length;
  }

  public isEmpty(): boolean {
    return this.data.length <= 0;
  }

  public isFull(): boolean {
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
