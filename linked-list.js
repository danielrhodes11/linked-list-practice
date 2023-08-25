class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) {
      this.push(val);
    }
  }

  _get(idx) {
    if (isNaN(Number(idx)) || idx < 0 || idx >= this.length) {
      return null;
    }
    let curr = this.head;
    while (idx) {
      idx--;
      curr = curr.next;
    }
    return curr;
  }

  _wrappedGet(node, idx) {
    if (idx > 0) {
      return this._wrappedGet(node.next, idx - 1);
    }
    return node;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAt(idx, val) {
    const newNode = new Node(val);
    let prev;
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      prev = this._get(idx - 1);
      newNode.next = prev.next;
      prev.next = newNode;
    }
    if (prev === this.tail || !this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  removeAt(idx) {
    const removed = this._get(idx);
    let prev;
    if (idx === 0) {
      this.head = this.head.next;
    } else {
      prev = this._get(idx - 1);
      prev.next = removed.next;
      if (removed === this.tail) {
        this.tail = prev;
      }
    }
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return removed.val;
  }

  average() {
    if (!this.length) {
      return 0;
    }
    let sum = 0;
    let curr = this.head;
    while (curr) {
      sum += curr.val;
      curr = curr.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
