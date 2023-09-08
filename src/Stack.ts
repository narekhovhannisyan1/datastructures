interface StackInterface {
  push(val: number): void;
  peek(): number | undefined;
  pop(): number | undefined;
  size(): number;
  isFull(): boolean;
  isEmpty(): boolean;
}

class StackClass implements StackInterface {
  private data: Array<number> = [];

  constructor(private capacity: number) {}

  public push(val: number): void {
    if (this.isFull()) throw Error("Stack is full");
    this.data.push(val);
  }

  public pop(): number | undefined {
    if (this.isEmpty()) throw Error("Stack is empty");
    return this.data.pop();
  }

  public peek(): number | undefined {
    return this.data[this.data.length - 1];
  }

  public size(): number {
    return this.data.length;
  }

  public isFull() {
    return this.data.length === this.capacity;
  }
  public isEmpty() {
    return this.data.length === 0;
  }
}
