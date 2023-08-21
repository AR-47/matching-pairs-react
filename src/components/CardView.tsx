/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import "./CardView.css";

interface CardProp {
    img: string;
    isShown: boolean;
}

export const CardView = ({ img, isShown }: CardProp): JSX.Element => {
    const [isCardShown, setIsCardShown] = useState<boolean>(isShown);
    return (
        <div
            role="button"
            onClick={() => {
                if (isCardShown === false) {
                    setIsCardShown(true);
                }
            }}
            className="card"
        >
            {isCardShown ? img : "?"}
        </div>
    );
};
