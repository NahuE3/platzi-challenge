import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  if (typeof window === 'undefined') return [initialValue, () => {}];

  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValueL;
    } catch (error) {
      // console.log(error.message)
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoreValue(value);
    } catch (error) {
      // console.log(error.message)
    }
  }

  return [storeValue, setLocalStorage]
}
