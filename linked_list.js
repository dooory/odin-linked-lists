class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.#head) {
      this.#head = newNode;

      return
    }

    if (!this.#tail) {
      this.#tail = newNode;
      this.#head.nextNode = newNode;

      return
    }

    const oldTail = this.#tail;
    oldTail.nextNode = newNode;
    this.#tail = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.#head) {
      this.#head = newNode;

      return
    }

    const oldHead = this.#head;

    if (!this.#tail) {
      this.#tail = oldHead;
    }

    this.#head = newNode;
    newNode.nextNode = oldHead;
  }

  size() {
    if (!this.#head) {
      return
    }

    let nodeCount = 0;

    let currNode = this.#head;

    while (currNode) {
      nodeCount += 1;

      currNode = currNode.nextNode;
    }

    return nodeCount;
  }

  head() {
    if (!this.#head) {
      return;
    }

    return this.#head.value;
  }

  tail() {
    if (!this.#tail) {
      return;
    }

    return this.#tail.value;
  }

  at(index) {
    if (!this.head() && !this.tail()) {
      return undefined;
    }

    let currNode = this.#head;

    for (let i = 0; i < index; i++) {
      if (!currNode.nextNode) {
        return undefined;
      }

      currNode = currNode.nextNode;
    }

    return currNode.value;
  }

  pop() {
    if (!this.head()) {
      return undefined;
    }

    const oldHead = this.#head;
    this.#head = oldHead.nextNode;

    return oldHead.value;
  }

  contains(value) {
    if (!this.head()) {
      return false;
    }

    let currNode = this.#head;

    while (currNode) {
      if (currNode.value === value) {
        return true;
      }

      currNode = currNode.nextNode;
    }

    return false;
  }

  findIndex(value) {
    if (!this.head()) {
      return -1;
    }

    let currNode = this.#head;
    let index = 0;

    while (currNode) {
      if (currNode.value === value) {
        return index;
      }

      index += 1;
      currNode = currNode.nextNode;
    }

    return -1;
  }

  toString() {
    if (!this.head()) {
      return "";
    }

    let currNode = this.#head;
    let array = [];

    while (currNode) {
      array.push(currNode.value);

      currNode = currNode.nextNode;
    }

    return `( ${array.join(" ) -> ( ")} ) -> null`;
  }

  #getNodeAtIndex(index) {
    let node = this.#head;
    let currIndex = 0;

    while (currIndex !== index) {
      if (!node) {
        return undefined;
      }
      currIndex += 1;
      node = node.nextNode;
    }

    return node
  }

  insertAt(index, ...values) {
    if (!this.#head) {
      throw new RangeError(`Index <${index}> is out of bounds`);
    }

    let prevIndexNode = this.#getNodeAtIndex(index - 1);

    if (!prevIndexNode) {
      throw new RangeError(`Index <${index}> is out of bounds`);
    }

    let oldNextNode = prevIndexNode.nextNode;

    let lastNewNode = new Node(values[0]);
    prevIndexNode.nextNode = lastNewNode;

    for (let i = 1; i < values.length; i++) {
      let currNewNode = new Node(values[i]);

      lastNewNode.nextNode = currNewNode;
      lastNewNode = currNewNode;
    }

    lastNewNode.nextNode = oldNextNode;
  }
}
