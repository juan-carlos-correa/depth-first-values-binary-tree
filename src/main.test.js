import { it, expect } from 'vitest';

import { myFunction } from './main.mjs';

it('should return true', () => {
  expect(myFunction()).toBe(true);
});
