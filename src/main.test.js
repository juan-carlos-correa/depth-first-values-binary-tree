import { it, expect } from 'vitest';

import { depthFirstValues, Node } from '../src/main.mjs';

it('should return correct DFS order for a full binary tree', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  // Tree structure:
  //        a
  //      /   \
  //     b     c
  //    / \     \
  //   d   e     f

  expect(depthFirstValues(a)).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
});

it('should return single node value for a single-node tree', () => {
  const a = new Node('a');
  expect(depthFirstValues(a)).toEqual(['a']);
});

it('should return empty array for null tree', () => {
  expect(depthFirstValues(null)).toEqual([]);
});

it('should handle left-skewed tree', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  a.left = b;
  b.left = c;

  // a
  // |
  // b
  // |
  // c

  expect(depthFirstValues(a)).toEqual(['a', 'b', 'c']);
});

it('should handle right-skewed tree', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  a.right = b;
  b.right = c;

  // a
  //  \
  //   b
  //    \
  //     c

  expect(depthFirstValues(a)).toEqual(['a', 'b', 'c']);
});
