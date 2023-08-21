import { shuffleArray } from "./shuffleArray";

const generateArrOfLengthN = (n: number) => {
    const array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i.toString());
    }
    return array;
};

//An example of using react-testing-library
describe("shuffleArray correctly reshuffles an input array of length 5", async () => {
    test("Input array of length 5", () => {
        const array20 = generateArrOfLengthN(5);
        const shuffledArray20 = shuffleArray(array20);
        expect(shuffledArray20).toHaveLength(5);
        expect(shuffledArray20).not.toEqual(array20);
        expect(new Set(shuffledArray20)).toEqual(new Set(array20));
    });
});

describe("shuffleArray correctly reshuffles an input array of length 20", async () => {
    test("Input array of length 20", () => {
        const array20 = generateArrOfLengthN(20);
        const shuffledArray20 = shuffleArray(array20);
        expect(shuffledArray20).toHaveLength(20);
        expect(shuffledArray20).not.toEqual(array20);
        expect(new Set(shuffledArray20)).toEqual(new Set(array20));
    });
});
