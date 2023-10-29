"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    printList() {
        if (!this.head)
            return "[]";
        let result = "[";
        let curr = this.head;
        for (let i = 1; i < this.length; i++) {
            result += curr.data + ", ";
            curr = curr.next;
        }
        result += curr.data + "]";
        return result;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
    appendLeft(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }
    pop() {
        var _a;
        let poppedVal;
        if (this.length === 1) {
            poppedVal = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
            this.length--;
            this.tail = null;
            this.head = null;
        }
        if (this.tail) {
            poppedVal = this.tail.data;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        }
        return poppedVal;
    }
    popLeft() {
    }
    findByVal() {
    }
    getByIndex() {
    }
    toArray() {
    }
    fromArray() {
    }
    reverse() {
    }
}
const list = new DoublyLinkedList();
list.append(3);
console.log(list.pop());
console.log(list.printList());
