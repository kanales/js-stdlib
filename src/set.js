import { identity } from "./operator";
export function set(hash = identity) {
    function insert(o, x) {
        const h = hash(x);
        if (o[h] === undefined) o[h] = true;
    }

    function pop(o, x) {
        const h = hash(x);
        if (o[h] !== undefined) delete o[h];
    }

    function contains(o, x) {
        const h = hash(x);
        return o[h] !== undefined;
    }

    return { insert, pop, contains };
}