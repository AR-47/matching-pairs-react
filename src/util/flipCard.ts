import { CardObj } from "./generateGameCards";

export const flipCard = (card: CardObj): void => {
    card.isShown = card.isShown === true ? false : true;
};
