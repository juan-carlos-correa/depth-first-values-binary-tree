# 🌳 Depth First Values (Binary Tree)

_Given a binary tree, return an array containing the values of the tree in depth-first order (pre-order traversal)._

## ✍️ Your Task

1. Read the problem and requirements carefully
2. Write your implementation in `src/main.mjs`
3. Test your solution with `npm run test`

## 📘 Description

Given a binary tree, traverse the nodes using **depth-first search** (DFS) and return an array with the node values in the order they were visited.

Use **pre-order traversal**: root → left → right.

You may assume each node has the following structure:

```js
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
```

## 📥 Input

- A binary tree with `1 <= number of nodes <= 10⁴`
- Each node contains an integer value

## 📤 Output

- An array of values visited in depth-first order

## 🛠️ Instructions

1. Open the file `src/main.mjs` and implement the `depthFirstValues` function.
2. To verify your solution, run the tests in `src/main.test.js` using:

```bash
npm run test
```

✅ Do not modify the test file unless you're adding extra edge cases.

## 💡 Tips

- This is a great opportunity to practice **recursion**
- You can also solve it using an **explicit stack**

## 🧪 Run Tests

This repo uses [Vitest](https://vitest.dev/). To run tests locally:

```bash
npm install
npm run test
```

✅ Make sure your implementation is in `src/main.mjs` and your tests in `src/main.test.js`.
