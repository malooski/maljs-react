import { useEffect, useState } from "react";
import { useCurrentRef, useInterval } from ".";

/**
 * Calls the given factory every `delayMs` milliseconds and whenever the given dependencies change.
 * @param factory
 * @param delayMs
 * @param deps
 * @returns
 */
export function useIntervalMemo<T>(factory: () => T, delayMs: number, deps: any[]): T {
    const savedCallback = useCurrentRef(factory);
    const [value, setValue] = useState<T>(factory);

    useInterval(() => {
        setValue(savedCallback.current());
    }, delayMs);

    useEffect(() => {
        setValue(savedCallback.current());
    }, deps);

    return value;
}
