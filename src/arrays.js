export function swap(arr, a, b) {
    const [x, y] = [arr[a], arr[b]];
    arr[b] = x;
    arr[a] = y;
}

export function sum(arr) {
    return arr.reduce((a, y) => a + y, 0);
}

export function cumsum(arr) {
    const out = Array.from(arr);

    if (out.length) out[0] = arr[0];

    for (let i = 1; i < out.length; i++) {
        out[i] = out[i - 1] + arr[i];
    }
    return out;
}

export function normalize(arr, max = 1) {
    const s = sum(arr);
    const ratio = s / max;
    return arr.map(x => x / ratio);
}