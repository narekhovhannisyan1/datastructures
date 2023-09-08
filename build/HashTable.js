export default class HashTable {
    size;
    table;
    constructor(size = 32) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }
    hash(key) {
        let hashValue = 0;
        let strKey = String(key);
        for (let i = 0; i < strKey.length; ++i) {
            hashValue += strKey.charCodeAt(i);
        }
        return hashValue % this.size;
    }
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; ++i) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; ++i) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return undefined;
    }
    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; ++i) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
    has(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; ++i) {
            if (bucket[i][0] === key) {
                return true;
            }
        }
        return false;
    }
    print() {
        for (let i = 0; i < this.table.length; ++i) {
            console.log(this.table[i]);
        }
    }
}
