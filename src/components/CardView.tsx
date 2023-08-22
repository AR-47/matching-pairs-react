/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import "./CardView.css";

interface CardProp {
    img: string;
    isShown: boolean;
    onCardClick: () => void;
}

export const CardView = ({
    img,
    isShown,
    onCardClick,
}: CardProp): JSX.Element => {
    const [isCardShown, _setIsCardShown] = useState<boolean>(isShown);
    return (
        <div
            //role="button"
            onClick={onCardClick}
            className="card"
        >
            {isCardShown ? img : "?"}
        </div>
    );
};
