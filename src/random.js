import { cumsum, normalize, sum } from "./arrays";
export function randint(min, max) {
    const h = max - min;
    return min + Math.floor(Math.random() * h);
}

export function choices(population, weights = undefined, k = 1) {
    weights = weights ?? Array.from(population).map(() => 1);

    if (weights.length !== population.length) throw Error("Population and weights must have the same size");

    const cs = cumsum(normalize(weights));
    const outs = [];

    for (let i = 0; i < k; i++) {
        const r = Math.random();
        const idx = sum(
            cs.map(x => Number(x < r)));
        outs.push(population[idx]);
    }

    return outs;
}