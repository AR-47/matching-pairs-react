import { areTwoCardsTheSame } from "./areTwoCardsTheSame";
import { CardObj } from "./generateGameCards";

const cardOne: CardObj = { emoji: "🦧", id: "1" };
const cardTwo: CardObj = { emoji: "🦧", id: "2" };
const cardThree: CardObj = { emoji: "🦊", id: "3" };
const cardFour: CardObj = { emoji: "🦊", id: "4" };

describe("Testing areTwoCardsEqual function", async () => {
    test("When the cards are the same", () => {
        expect(areTwoCardsTheSame(cardOne, cardTwo)).toEqual(true);
        expect(areTwoCardsTheSame(cardThree, cardFour)).toEqual(true);
    });
});

describe("Testing areTwoCardsEqual function", async () => {
    test("When the cards are not the same", () => {
        expect(areTwoCardsTheSame(cardOne, cardThree)).toEqual(false);
        expect(areTwoCardsTheSame(cardTwo, cardFour)).toEqual(false);
    });
});
