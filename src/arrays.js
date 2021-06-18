export function swap(arr, a, b) {
    const [x, y] = [arr[a], arr[b]];
    arr[b] = x;
    arr[a] = y;
}