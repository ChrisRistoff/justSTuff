class HashMap {
  constructor (maxSize=100) {
    this.maxSize = maxSize
    this.bucket = new Array(maxSize)
    this.added = 0
  }

  _hash (key) {
    let hash = 0
    key = String(key)

    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + key.charCodeAt(i)
      hash = hash & hash
      hash = Math.abs(hash)
    }

    hash = hash % this.maxSize
    return hash;
  }

  set (key, value) {
    if (this.added === this.maxSize) return
    const index = this._hash(key)

    if (!this.bucket[index]) this.added++

    this.bucket[index] = [key, value]

    return this;
  }

  get (key) {
    const index = this._hash(key)

    if(this.bucket[index]) return this.bucket[index][1];

    return undefined;
  }

  delete (key) {
    const index = this._hash(key)

    if (this.bucket[index]) {
      this.added--
      this.bucket[index] = undefined
    }

    return this;
  }

  clear () {
    for (let i in this.bucket) {
      this.bucket[i] = undefined
    }

    return this;
  }

  has (key) {
    const index = this._hash(key)

    if(this.bucket[index]) return true;
    return false;
  }

  forEach (fn) {
    for (const item of this.bucket) {
      if(item) fn(item[0], item[1])
    }
  }

  entries () {
    const arr = []

    for (const item of this.bucket) {
      if(item) arr.push(item)
    }

    return arr;
  }

  keys () {
    const arr = []
    for (const item of this.bucket) {
      if (item) arr.push(item[0])
    }

    return arr;
  }

  values () {
    const arr = []
    for (const item of this.bucket) {
      if(item) arr.push(item[1])
    }

    return arr;
  }

  size() {
    return this.added;
  }
}

module.exports = HashMap
