import { CardObj } from "./generateGameCards";

export const areTwoCardsTheSame = (
    cardOne: CardObj,
    cardTwo: CardObj
): boolean => cardOne.emoji === cardTwo.emoji;
