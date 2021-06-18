import { swap } from "../arrays";

function leftIdx(self, parentIdx) {
    const i = 2 * parentIdx + 1;
    return i < self.size ? i : null;
}

function rightIdx(self, parentIdx) {
    const i = 2 * parentIdx + 2;
    return i < self.size ? i : null;
}

export function make(iterable, cmp = undefined) {
    const self = new Heap(cmp);
    self.h = Array.from(iterable);
    self.size = self.h.length;
    if (self.size > 1) {
        for (let i = Math.floor(self.size / 2 - 1); i >= 0; i--) {
            self.heapify(i);
        } 
    }

    return self;
}



export function sort(iterable, cmp = undefined) {
    const self = make(iterable, cmp);
    let out = [];
    let x;
    while ((x = self.pop()) !== undefined) out.push(x);

    return out;
}

export default function heap(cmp = undefined) {
    cmp = cmp ?? ((x,y) => x > y);

    function push(arr) {
        arr.push(x);
        const idx = Math.floor((this.size - 1) / 2);
        while (idx >= 0) {
            this.heapify(idx);
        }    
    }

    function pop() {

    }
    
    return {
        push, pop 
    }
}

export class Heap {
    constructor(cmp = undefined) {
        this.h = [];
        this.size = 0;
        this.cmp = cmp ?? ((x,y) => x > y);
    }

    toString() {
        return this.h.toString();
    }

    peek() {
        // todo(kanales): should throw exception on empty
        return this.size ? this.h[0] : undefined;
    }

    pop() {
        if (this.size < 1) {
            return undefined;
        }

        if (this.size == 1) {
            this.size -= 1;
            return this.h.pop();
        }

        const max = this.h[0];
        this.h[0] = this.h.pop();
        this.size -= 1;
        this.heapify();
        return max;
    }

    heapify(idx = 0) {
        if (idx < this.size) {
            let violation = idx;
    
            const [left, right] = [leftIdx(this, idx), rightIdx(this, idx)];
    
            if (leftIdx !== null && this.cmp(this.h[left], this.h[violation])) violation = left;
            if (rightIdx !== null && this.cmp(this.h[right], this.h[violation])) violation = right;
    
            if (violation != idx) {
                swap(this.h, violation, idx);
                this.heapify(violation);
            }
        }
    }

    push(x) {
        this.h.push(x);
        const idx = Math.floor((this.size - 1) / 2);
        this.size += 1;
        while (idx >= 0) {
            this.heapify(idx);
        }    
    }
}