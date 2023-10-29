import { MapType } from "../DS/types/HashMapTypes"

export class HashMap implements MapType {
  bucket: any[]
  maxSize: number
  size: number
  constructor (maxSize = 100) {
    this.maxSize = maxSize
    this.bucket = new Array(maxSize)
    this.size = 0
  }

  _hash (key: any) {
    key = String(key)
    let hash = 0

    for (const i in key) {
      hash = (hash >> 5) + key.charCodeAt(i)
      hash = hash & hash
      hash = Math.abs(hash)
    }

    hash = hash % this.maxSize

    return hash
  }

  set (key: any, value: any) {
    const index = this._hash(key)

    this.bucket[index] = [key, value]
    this.size++

    return this
  }

  get (key: any) {
    const index = this._hash(key)

    if(this.bucket[index]) return this.bucket[index][1]

    return undefined
  }

  delete (key: any) {
    const index = this._hash(key)

    this.bucket[index] = undefined
    this.size--

    return this
  }

  clear () {
    for (let i in this.bucket) {
      this.bucket[i] = undefined
    }

    return this
  }

  has (key: any) {
    const index = this._hash(key)

    if (this.bucket[index]) return true
    return false
  }

  forEach (fun: Function) {
    for (let i = 0; i < this.bucket.length; i++) {
      if(this.bucket[i]) {
        fun(this.bucket[i][0], this.bucket[i][1])
      }
    }

    return this
  }

  entries () {
    const arr = []

    for (let i = 0; i < this.bucket.length; i++) {
      if(this.bucket[i]) arr.push(this.bucket[i])
    }

    return arr
  }

  keys () {
    const arr = []

    for (let i = 0; i < this.bucket.length; i++) {
      if(this.bucket[i]) arr.push(this.bucket[i][0])
    }

    return arr
  }

  values () {
    const arr = []

    for (let i = 0; i < this.bucket.length; i++) {
      if(this.bucket[i]) arr.push(this.bucket[i][1])
    }

    return arr
  }
}
