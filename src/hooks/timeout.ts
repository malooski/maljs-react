import { useEffect, useRef } from "react";
import { useCurrentRef } from "./current_ref";

export function useTimeout(callback: () => void, delay: number) {
    const savedCallback = useCurrentRef(callback);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current!();
        }
        if (delay !== null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}
