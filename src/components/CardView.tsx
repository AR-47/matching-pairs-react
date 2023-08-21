import "./CardView.css";

interface CardProp {
    img: string;
    isRemoved: boolean;
}

export const CardView = (props: CardProp): JSX.Element => {
    return <div className="card">{props.img}</div>;
};
