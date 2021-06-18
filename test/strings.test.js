import { lev, z } from "../src/strings";

it("should calculate levenshtein distance", () => {
    expect(lev("planet", "planetary")).toEqual(3);
    expect(lev("", "test")).toEqual(4);
    expect(lev("test", "")).toEqual(4);
    expect(lev("book", "back")).toEqual(2);
    expect(lev("book", "book")).toEqual(0);
    expect(lev("", "")).toEqual(0);
    expect(lev("orchestration", "container")).toEqual(10);
});

// it("should calculate the maximal length substrings", () => {
//     expect(
//         z("abracadabra")
//     ).toEqual([0, 0, 0, 1, 0, 1, 0, 4, 0, 0, 1]);

//     expect(
//         z("aaaa")
//     ).toEqual([0, 3, 2, 1]);

//     expect(
//         z("zxxzxxz")
//     ).toEqual([0, 0, 0, 4, 0, 0, 1]);
// })