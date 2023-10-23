/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

    return (
        <div
            onClick={onCardClick}
            className={isCardFound ? "card found" : "card"}
        >
            {isCardShown ? card.emoji : "?"}
        </div>
    );
};
