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
}
exports.LinkedList = LinkedList;
const newList = new LinkedList();
newList.append("item2");
newList.append("item3");
newList.append("item4");
newList.appendLeft("item1");
console.log(newList);
console.log(newList.printList());
