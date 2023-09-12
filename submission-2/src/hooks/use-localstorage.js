import { useState } from 'react';

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {type} key - the key to use for storing the value in local storage
 * @param {type} initialValue - the initial value to use if there is no value stored in local storage
 * @return {array} - an array containing the current value, a function to update the value, and a function to remove the value from local storage
 */
export function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  
  const [value, setValue] = useState(storedValue || initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);

    localStorage.setItem(key, newValue);
  };

  const removeValue = () => {
    setValue(null);

    localStorage.removeItem(key);
  };

  return [value, updateValue, removeValue];
}
