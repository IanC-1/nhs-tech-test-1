// Unit Test File

import { renderHook, act } from '@testing-library/react';
import { useCart } from './useCart';
import { expect, test } from 'vitest';

test('prevents total from being negative by removing items at 0 quantity', () => {
  const { result } = renderHook(() => useCart());

  act(() => {
    result.current.addToCart({ id: 1, name: "Mic", price: 100 });
  });
  
  expect(result.current.total).toBe(100);

  act(() => {
    result.current.updateQty(1, -1); // Hit 0
  });

  // Cart should filter item out and total should be 0, never negative
  expect(result.current.cart.length).toBe(0);
  expect(result.current.total).toBe(0);
});