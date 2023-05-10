import { useRef } from "react";

/**
 * Returns a ref that always has the current value of the given value.
 *
 * This is useful for callbacks or effects that need to access the current value of a variable.
 *
 * @param value
 * @returns
 */
export function useCurrentRef<T>(value: T) {
    const ref = useRef<T>(value);
    ref.current = value;
    return ref;
}
