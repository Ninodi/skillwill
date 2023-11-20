import { useEffect, useState } from 'react'

function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth || 0)
    const [height, setHeight] = useState(window.innerHeight || 0)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth || 0)
            setHeight(window.innerHeight || 0)
        }
 
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return [width, height]
}

export default useWindowResize