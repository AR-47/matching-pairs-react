import { CardObj } from "./generateGameCards";

export const removeCard = (card: CardObj): void => {
    card.isFound = true;
};
