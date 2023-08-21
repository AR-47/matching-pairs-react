import { shuffleArray } from "./shuffleArray";

export const createCards = (cardList: string[]): string[] => {
    const chosenCardsSet = new Set<string>();
    while (chosenCardsSet.size !== 8) {
        const randomIdx = Math.floor(Math.random() * cardList.length);
        chosenCardsSet.add(cardList[randomIdx]);
    }
    const chosenCardsList = shuffleArray([
        ...chosenCardsSet,
        ...chosenCardsSet,
    ]);
    return chosenCardsList;
};
