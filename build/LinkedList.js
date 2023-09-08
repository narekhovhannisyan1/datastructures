class LLNode {
    val;
    next;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class LinkedList {
    head;
    cur_size;
    constructor(head = null, cur_size = 0) {
        this.head = head;
        this.cur_size = cur_size;
        this.head = null;
    }
    prepend(val) {
        const newHead = new LLNode(val, this.head);
        this.head = newHead;
    }
    append(value) {
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
    delete(value) {
        if (!this.head)
            return;
        let tmp = this.head;
        let prev = this.head;
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
    isEmpty() {
        return this.cur_size === 0;
    }
    toArray() {
        if (!this.head)
            return [];
        let tmp = this.head;
        const res = [];
        while (tmp) {
            res.push(tmp.val);
            tmp = tmp.next;
        }
        return res;
    }
    clear() {
        this.head = null;
        this.cur_size = 0;
    }
    size() {
        return this.cur_size;
    }
}
export default LinkedList;
