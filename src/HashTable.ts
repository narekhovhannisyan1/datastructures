interface HashTableInterface<K, V> {
  hash(key: K): number;
  set(key: K, value: V): void;
  get(key: K): V | undefined;
  delete(key: K): void;
  has(key: K): boolean;
}

export default class HashTable<K, V> implements HashTableInterface<K, V> {
  private readonly table: Array<Array<[K, V]>>;
  constructor(private readonly size: number = 32) {
    this.table = new Array(size).fill(null).map(() => []);
  }

  public hash(key: K): number {
    let hashValue = 0;
    let strKey = String(key);

    for (let i = 0; i < strKey.length; ++i) {
      hashValue += strKey.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  public set(key: K, value: V): void {
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

  public get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; ++i) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  public delete(key: K): void {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; ++i) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }

  public has(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; ++i) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  public print() {
    for (let i = 0; i < this.table.length; ++i) {
      console.log(this.table[i]);
    }
  }
}
