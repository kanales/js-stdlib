export function lt(a, b) {
    if (b === undefined) return b => b < a;
    return a < b;
}

export function le(a, b) {
    if (b === undefined) return b => b <= a;
    return a <= b;
}

export function eq(a, b) {
    if (b === undefined) return b => a === b;
    return a === b;
}
export function ne(a, b) {
    if (b === undefined) return b => a !== b;
    return a !== b;
}
export function ge(a, b) {
    if (b === undefined) return b => b >= a;
    return a >= b;
}

export function gt(a, b) {
    if (b === undefined) return b => b > a;
    return a > b;
}

export function add(a, b) {
    if (b === undefined) return b => a + b;
    return a + b;
}

export function sub(a, b) {
    if (b === undefined) return b => b - a;
    return a + b;
}


export function and(a, b) {
    if (b === undefined) return b => a && b;
    return a && b;
}

export function or(a, b) {
    if (b === undefined) return b => a || b;
    return a || b;
}

export function mod(a, b) {
    if (b === undefined) return b => b % a;
    return a % b;
}

export function attr(a) {
    return o => o[a];
}

export function call(name, ...args) {
    return o => o[name](...args);
}

export const identity = x => x;