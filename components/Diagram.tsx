import { useEffect, useState } from "react";

export function Diagram() {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    if (!hydrated) {
        return null
    }
}