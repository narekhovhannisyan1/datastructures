interface LLNode {
  val: number;
  next: LLNode | null;
}

class LLNode implements LLNode {
  constructor(public val: number = 0, public next: LLNode | null = null) {}
}

interface LinkedList {
  append(val: number): void;
  prepend(val: number): void;
  delete(val: number): void;
  size(): number;
  isEmpty(): boolean;
  toArray(): Array<number>;
  clear(): void;
}

class LinkedList implements LinkedList {
  constructor(public head: LLNode | null = null, private cur_size: number = 0) {
    this.head = null;
  }

  public prepend(val: number) {
    const newHead = new LLNode(val, this.head);
    this.head = newHead;
  }

  public append(value: number): void {
    if (!this.head) {
      this.head = new LLNode(value);
      return;
    }

    let tmp = this.head;
    while (tmp && tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = new LLNode(value);
  }

  public delete(value: number): void {
    if (!this.head) return;

    let tmp: LLNode | null = this.head;
    let prev: LLNode = this.head;

    while (tmp) {
      if (tmp.val === value) {
        const n = tmp.next;
        prev.next = n;
        break;
      }
      prev = tmp;
      tmp = tmp.next;
    }
  }

  public isEmpty(): boolean {
    return this.cur_size === 0;
  }

  public toArray(): Array<number> {
    if (!this.head) return [];

    let tmp: LLNode | null = this.head;
    const res: Array<number> = [];

    while (tmp) {
      res.push(tmp.val);
      tmp = tmp.next;
    }
    return res;
  }

  public clear(): void {
    this.head = null;
    this.cur_size = 0;
  }

  public size(): number {
    return this.cur_size;
  }
}

export default LinkedList;
