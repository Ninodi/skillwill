import { useEffect, useState } from 'react'

function useLocalStorage(key, fallback) {
    //if you find key return it, else return fallback
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) ?? fallback)

    //if value changes, update localStorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage