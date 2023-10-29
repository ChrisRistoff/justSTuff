"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMap = void 0;
class HashMap {
    constructor(maxSize = 100) {
        this.maxSize = maxSize;
        this.bucket = new Array(maxSize);
        this.size = 0;
    }
    _hash(key) {
        key = String(key);
        let hash = 0;
        for (const i in key) {
            hash = (hash >> 5) + key.charCodeAt(i);
            hash = hash & hash;
            hash = Math.abs(hash);
        }
        hash = hash % this.maxSize;
        return hash;
    }
    set(key, value) {
        const index = this._hash(key);
        this.bucket[index] = [key, value];
        this.size++;
        return this;
    }
    get(key) {
        const index = this._hash(key);
        if (this.bucket[index])
            return this.bucket[index][1];
        return undefined;
    }
    delete(key) {
        const index = this._hash(key);
        this.bucket[index] = undefined;
    }
    clear() {
        for (let i in this.bucket) {
            this.bucket[i] = undefined;
        }
        return this;
    }
    has(key) {
        const index = this._hash(key);
        if (this.bucket[index])
            return true;
        return false;
    }
    forEach(fun) {
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i]) {
                fun(this.bucket[i][0], this.bucket[i][1]);
            }
        }
        return this;
    }
    entries() {
    }
    keys() {
    }
    values() {
    }
}
exports.HashMap = HashMap;
