/* Randomize array in-place using Durstenfeld shuffle algorithm */
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array: string[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const createCards = (cardList: string[]): string[] => {
    const chosenCardsSet = new Set<string>();
    while (chosenCardsSet.size !== 8) {
        chosenCardsSet.add(
            cardList[Math.floor(Math.random() * cardList.length)]
        );
    }
    const chosenCardsList = shuffleArray([
        ...chosenCardsSet,
        ...chosenCardsSet,
    ]);
    return chosenCardsList;
};

console.log(shuffleArray(["1", "2", "3"]));
