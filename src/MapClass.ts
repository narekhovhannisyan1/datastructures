interface MapInterface<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
  has(key: K): boolean;
  delete(key: K): void;
  clear(): void;
  size(): number;
  keys(): K[];
  values(): V[];
  entries(): [K, V][];
}

export default class MapClass<K, V> implements MapInterface<K, V> {
  constructor(private data: { key: K; value: V }[] = []) {}

  public set(key: K, value: V): void {
    const existingIndex = this.data.findIndex((i) => i.key === key);

    if (existingIndex !== -1) {
      this.data[existingIndex].value = value;
    } else {
      this.data.push({ key, value });
    }
  }

  public get(key: K): V | undefined {
    const entry = this.data.find((entry) => entry.key === key);
    return entry ? entry.value : undefined;
  }

  public delete(key: K): void {
    const index = this.data.findIndex((entry) => entry.key === key);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  public has(key: K): boolean {
    return this.data.some((entry) => entry.key === key);
  }

  public keys(): K[] {
    return this.data.map((entry) => entry.key);
  }

  public values(): V[] {
    return this.data.map((entry) => entry.value);
  }

  public entries(): [K, V][] {
    return this.data.map((entry) => [entry.key, entry.value]);
  }

  public clear(): void {
    this.data = [];
  }

  public size(): number {
    return this.data.length;
  }
}
