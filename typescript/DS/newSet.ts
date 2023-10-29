import {setType} from "../DS/types/setTypes"

export class newSet implements setType {
  bucket: any[]
  size: number
  maxSize: number

  constructor (...args: any) {
    this.maxSize = 20
    this.bucket = new Array(this.maxSize)
    this.size = 0

  if (args) {
    for (let arg of args) {
      if (typeof arg === "object") {
        for (let item of arg) {
          this.add(item)
        }
      } else {
        this.add(arg)
      }
    }
  }

  }

  _hash (value: any) {
    value = String(value)
    let hash = 0

    for (const i in value) {
      hash = (hash << 5) + value.charCodeAt(i)
      hash = hash & hash
      hash = Math.abs(hash)
    }

    hash = hash % this.maxSize

    return hash
  }

  printSet () {
    const arr = this.bucket.filter((item) => item)
    let res = `Set(${this.size}) {${arr.join(", ")}}`

    return res
  }

  add (value: any) {
    const index = this._hash(value)

    if (!this.bucket[index]) {
      this.bucket[index] = value
      this.size++
      return this
    }

    return this
  }

  has (value: any) {
    const index = this._hash(value)

    if(this.bucket[index]) return true

    return false
  }

  delete (value: any) {
    const index = this._hash(value)

    if (this.bucket[index]) {
      this.bucket[index] = null
      this.size--
    }
  }

  toArray () {
    const arr = this.bucket.filter((item) => item)

    return arr
  }

}
