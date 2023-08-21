import "./CardView.css";

interface CardProp {
    img: string;
    isShown: boolean;
}

export const CardView = ({ img, isShown }: CardProp): JSX.Element => {
    return <div className="card">{isShown ? img : "?"}</div>;
};
