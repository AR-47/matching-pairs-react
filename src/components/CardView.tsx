/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Why are the above 3 lines needed ?
import { useEffect, useState } from "react";
import "./CardView.css";
import { CardObj } from "../util/generateGameCards";

interface CardViewProps {
    card: CardObj;
    onCardClick: () => void;
}

export const CardView = ({ card, onCardClick }: CardViewProps): JSX.Element => {
    const [isCardShown, setIsCardShown] = useState<boolean>(card.isShown);
    const [isCardFound, setIsCardFound] = useState<boolean>(card.isFound);

    useEffect(() => {
        setIsCardShown(card.isShown);
    }, [card.isShown]);

    useEffect(() => {
        setIsCardFound(card.isFound);
    }, [card.isFound]);

    // I thought the card would flip without this useEffect,
    // Since the switch statement has other state update functions,
    // I thought it would cause a re-render of the TableView component
    // which would result in the CardView components being re-rendered.
    // what did I not understand? Ask Neil...

    return (
        <div
            //role="button"
            onClick={onCardClick}
            className={isCardFound ? "card found" : "card"}
        >
            {isCardShown ? card.emoji : "?"}
        </div>
    );
};
