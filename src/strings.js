/**
 *
 * @param { String } left
 * @param { String } right
 * @returns { Number }
 */
export function lev(left, right) {
    // left is always the longest
    if (left.length < right.length) {
        [left, right] = [right, left];
    }

    if (right.length == 0) {
        return left.length;
    }

    let prev = Array.from({ length: right.length + 1 }, (_, i) => i);

    let i = 0;
    for (const c1 of left) {
        let current = [i + 1];

        let j = 0;
        for (const c2 of right) {
            const insertions = prev[j + 1] + 1;
            const deletions = current[j] + 1;
            const substitutions = prev[j] + (c1 != c2 ? 1 : 0);


            current.push(Math.min(insertions, deletions, substitutions));

            j += 1;
        }

        prev = current;
        i += 1;
    }

    return prev[prev.length-1];
}

// export function z() {
//     return [];
// }