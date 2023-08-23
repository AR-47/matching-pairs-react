import { shuffleArray } from "./shuffleArray";

export interface CardObj {
    id: string;
    emoji: string;
    isShown: boolean;
    isFound: boolean;
}

export const generateGameCards = (emojiList: string[]): CardObj[] => {
    const chosenEmojiSet = new Set<string>();
    while (chosenEmojiSet.size !== 8) {
        const randomIdx = Math.floor(Math.random() * emojiList.length);
        chosenEmojiSet.add(emojiList[randomIdx]);
    }
    const chosenEmojiList = shuffleArray([
        ...chosenEmojiSet,
        ...chosenEmojiSet,
    ]);

    const gameCards: CardObj[] = chosenEmojiList.map((emoji, index) => ({
        id: index.toString(),
        emoji: emoji,
        isShown: Math.random() > 0.5,
        isFound: false,
    }));

    return gameCards;
};
