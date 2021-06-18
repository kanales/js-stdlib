import { swap } from "./arrays";

const defaultcmp = ((x, y) => x > y);

function leftIdx(h, parentIdx) {
    const i = 2 * parentIdx + 1;
    return i < h.length ? i : null;
}

function rightIdx(h, parentIdx) {
    const i = 2 * parentIdx + 2;
    return i < h.length ? i : null;
}

export function sort(iterable, cmp = defaultcmp) {
    const { make, pop } = heap(cmp);
    const self = make(iterable, cmp);
    let out = [];
    let x;
    while ((x = pop(self)) !== undefined) out.push(x);

    return out;
}


function heapify(h, idx = 0, cmp = defaultcmp) {
    if (idx < h.length) {
        let violation = idx;

        const [left, right] = [leftIdx(h, idx), rightIdx(h, idx)];

        if (leftIdx !== null && cmp(h[left], h[violation])) violation = left;
        if (rightIdx !== null && cmp(h[right], h[violation])) violation = right;

        if (violation != idx) {
            swap(h, violation, idx);
            heapify(h, violation, cmp);
        }
    }
}

export default function heap(cmp = defaultcmp) {

    function push(h, x) {
        let idx = Math.floor((h.length - 1) / 2);
        h.push(x);
        while (idx >= 0) {
            console.log({ idx });
            heapify(h, idx, cmp);
            idx = Math.floor((idx - 1) / 2);
        }
    }

    function pop(h) {
        if (h.length < 1) {
            return undefined;
        }

        if (h.length == 1) {
            return h.pop();
        }

        const max = h[0];
        h[0] = h.pop();
        heapify(h, 0, cmp);
        return max;
    }

    function make(iterable) {
        let h = Array.from(iterable);
        if (h.length > 1) {
            for (let i = Math.floor(h.length / 2 - 1); i >= 0; i--) {
                heapify(h, i, cmp);
            }
        }

        return h;
    }

    return { push, pop, make };
};

