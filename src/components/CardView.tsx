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
    useEffect(() => {
        setIsCardShown(card.isShown);
    }, [card.isShown]); // I thought the card would flip without this useEffect, what did I not understand? Ask Neil...

    return (
        <div
            //role="button"
            onClick={onCardClick}
            className="card"
        >
            {isCardShown ? card.emoji : "?"}
        </div>
    );
};
