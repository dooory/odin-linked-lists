import { LinkedList } from "./linked_list";

describe("Appending node to list using append()", () => {
  let list = new LinkedList();

  test("Appending to empty list", () => {
    list.append("Head node");

    expect(list.head()).toBe("Head node");
  })

  test("Appending to populated list", () => {
    list.append("Random node");

    expect(list.tail()).toBe("Random node");
  })
})

describe("Prepending node to list using prepend()", () => {
  let list = new LinkedList();

  test("Prepending to empty list", () => {
    list.prepend("Hello");

    expect(list.head()).toBe("Hello");
  })

  test("Prepending to populated list", () => {
    list.prepend("World");

    expect(list.head()).toBe("World");
  })
})

describe("Getting size of list using size()", () => {
  let list = new LinkedList();

  test("Empty list returns undefined", () => {
    expect(list.size()).toBeUndefined();
  })

  test("Populated list returns correct size", () => {
    list.append("John");
    list.append("Jane");
    list.append("Doe");

    expect(list.size()).toBeCloseTo(3);
  })
})

describe("Getting head node of list using head()", () => {
  let list = new LinkedList();

  test("Empty list returns undefined for head", () => {
    expect(list.head()).toBeUndefined();
  })

  test("Get head node using head()", () => {
    list.append("Greg");
    list.append("Garry");
    list.prepend("George");

    expect(list.head()).toBe("George");
  })
})

describe("Getting tail node of list using tail()", () => {
  let list = new LinkedList();

  test("Empty list returns undefined for tail", () => {
    expect(list.tail()).toBeUndefined();
  })

  test("Get tail node using tail()", () => {
    list.append("Jerry");
    list.append("James");
    list.append("Jaiden");

    expect(list.tail()).toBe("Jaiden");
  })
})

describe('Get node at given index using at()', () => {
  let list = new LinkedList();
  list.append("Zain");
  list.append("Zion");
  list.append("Zach");
  list.append("Zed");

  test("List without node at index returns undefined", () => {
    expect(list.at(5)).toBeUndefined();
  })

  test("List returns node at index", () => {
    expect(list.at(3)).toBe("Zed");
  })
})

describe('Remove head node from list using pop()', () => {
  let list = new LinkedList();

  test("Using pop on empty list returns undefined", () => {
    expect(list.pop()).toBeUndefined();
  })

  test("Using pop on populated list removes and returns head node", () => {
    list.append("Example Node");
    list.append("Another Node");
    list.prepend("Popped Head");

    expect(list.pop()).toBe("Popped Head");
  })
})

describe('Check if list contains a value using contains()', () => {
  let list = new LinkedList();

  list.append("Hello");
  list.append("Hi");
  list.append("Hey");
  list.append("Howdy");

  test("Returns false if list doesn't contain value", () => {
    expect(list.contains("Howdy Hey")).toBe(false);
  })

  test("Returns true if list contains value", () => {
    expect(list.contains("Hi")).toBe(true);
  })
})

describe('Find index of a node with a specific value in a list using findIndex()', () => {
  let list = new LinkedList();

  list.append("Tim");
  list.append("Timothy");
  list.append("Thomas");
  list.append("Tom");
  list.append("Tam");

  test("Returns -1 if no node with value is found", () => {
    expect(list.findIndex("John")).toBe(-1);
  })

  test("Returns index of node with value", () => {
    expect(list.findIndex("Thomas")).toBeCloseTo(2);
  })
})

describe("Convert a list to string using toString()", () => {
  let list = new LinkedList();

  test("Empty list returns an empty string", () => {
    expect(list.toString()).toBe("");
  })
})

describe("Insert values in list at index", () => {
  let list = new LinkedList();

  test("Trying to insert a value into empty list throws RangeError", () => {
    expect(() => {
      list.insertAt(3, "Great Node");
    }).toThrow();
  })

  test("Trying to insert at out of bounds index throws RangeError", () => {
    list.append("Elle");
    list.append("Emma");
    list.append("Ezra");

    expect(() => {
      list.insertAt(10, "New Node!", "Another One?")
    }).toThrow();
  })

  test("Inserts an values at a given index", () => {
    list.insertAt(1, "Ender");

    expect(list.at(1)).toBe("Ender");
  })

  test("Inserts multiple values at a given index", () => {
    list.insertAt(2, "Richy", "Ray", "Rachel");

    expect(list.at(2)).toBe("Richy");
    expect(list.at(3)).toBe("Ray");
    expect(list.at(4)).toBe("Rachel");
  })
})
