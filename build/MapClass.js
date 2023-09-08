export default class MapClass {
    data;
    constructor(data = []) {
        this.data = data;
    }
    set(key, value) {
        const existingIndex = this.data.findIndex((i) => i.key === key);
        if (existingIndex !== -1) {
            this.data[existingIndex].value = value;
        }
        else {
            this.data.push({ key, value });
        }
    }
    get(key) {
        const entry = this.data.find((entry) => entry.key === key);
        return entry ? entry.value : undefined;
    }
    delete(key) {
        const index = this.data.findIndex((entry) => entry.key === key);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }
    has(key) {
        return this.data.some((entry) => entry.key === key);
    }
    keys() {
        return this.data.map((entry) => entry.key);
    }
    values() {
        return this.data.map((entry) => entry.value);
    }
    entries() {
        return this.data.map((entry) => [entry.key, entry.value]);
    }
    clear() {
        this.data = [];
    }
    size() {
        return this.data.length;
    }
}
