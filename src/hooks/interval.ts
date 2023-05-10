import { useRef, useEffect } from "react";
import { useCurrentRef } from "./current_ref";

/**
 * Calls the given callback every `delay` milliseconds.
 * @param callback
 * @param delay
 */
export function useInterval(callback: () => void, delay: number) {
    const savedCallback = useCurrentRef(callback);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current!();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
