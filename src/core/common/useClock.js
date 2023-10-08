import { useState, useEffect } from 'react'

function useClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return {
    time: time.toLocaleTimeString([], {
      hour12: false,
    }),
  }
}

export default useClock
