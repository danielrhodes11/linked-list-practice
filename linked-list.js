/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }
      curr.next = null;
      this.tail = curr;
    }

    this.length--;
    return popped.val;
  }


  /** shift(): return & remove first item. */

  shift() {
    const shifted = this.head;
    if (this.length === 0) {
      return undefined;
    }
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = this.head.next;
    }
    this.length--;
    return shifted.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    const node = this._get(idx);
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const node = this._get(idx);
    node.val = val;
    // return node.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
      const prev = this._get(idx - 1);
      newNode.next = prev.next;
      prev.next = newNode;
    }
    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    const removed = this._get(idx);
    if (idx === 0) {
      this.head = this.head.next;
    }
    else {
      const prev = this._get(idx - 1);
      prev.next = removed.next;
    }
    this.length--;
    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    const sum = 0;
    let curr = this.head;
    while (curr) {
      sum += curr.val;
      curr = curr.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
