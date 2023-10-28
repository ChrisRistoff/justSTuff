"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    printList() {
        let curr = this.head;
        let result = "[";
        while (curr) {
            if (curr.next) {
                result += curr.data + ", ";
            }
            else {
                result += curr.data;
            }
            curr = curr.next;
        }
        result += "]";
        return result;
    }
    append(data) {
        const newNode = new ListNode(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
    appendLeft(data) {
        const newNode = new ListNode(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }
    pop() {
        var _a;
        const poppedVal = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
        let curr = this.head;
        this.length--;
        for (let i = 1; i < this.length; i++) {
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
        return poppedVal;
    }
    popLeft() { }
    findByVal() { }
    getByIndex() { }
    toArray() { }
    fromArray() { }
}
exports.LinkedList = LinkedList;
/*
const list = new LinkedList()
list.append("item1")
list.append("item2")
list.append("itemtopop")

console.log(list.printList());
console.log(list.pop());
console.log(list.printList());
*/
