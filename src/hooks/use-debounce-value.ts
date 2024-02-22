//Debounce serve para causar um delay,por exemplo quando se quer fazer algo em um input,e quer que seja feito só após a pessoa terminar de digitar

import { useEffect, useState } from 'react'

export default function useDebounceValue<T = unknown>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}