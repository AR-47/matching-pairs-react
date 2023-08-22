import { useState } from "react";
import { createCards } from "../util/createCards";
import { CardView } from "./CardView";
import "./TableView.css";

export function TableView(): JSX.Element {
    type Emoji = string;
    const emojiList: Emoji[] =
        "🐵 🦧 🐶 🐕 🐩 🐺 🦊 🐱 🐈 🐈‍⬛ 🦁 🐯 🐅 🐆 🐴 🐎 🦄 🦓 🦌 🦬 🐮 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🦙 🦒 🐘 🦣 🦏 🦛 🐭 🐀 🐹 🐰 🐇 🐿️ 🦫 🦔 🦇 🐻 🐨 🐼 🦥 🦘 🦡 🦃 🐔 🐤 🐥 🐧 🕊️ 🦅 🦆 🦢 🦉 🦩 🦚 🦜 🐸 🐊 🐢 🦎 🐍 🐲 🦕 🦖 🐳 🐬 🦭 🐠 🐡 🦈 🐙 🐚 🐌 🦋 🐛 🐜 🐝 🐞 🦗 🕷️ 🦂 🦞 🦐 🦑 ⛄".split(
            " "
        );
    const cards = createCards(emojiList);

    type turnPhaseType = "noneTurned" | "oneTurned" | "twoTurned";

    const [turnPhase, _setTurnPhase] = useState<turnPhaseType>("noneTurned");
    const [totalClicks, setTotalClicks] = useState<number>(0);
    // const [flippedCards, setFlippedCards] = useState<number[]>([])

    const allCards = cards.map((img, index) => (
        <CardView
            key={index}
            img={img}
            isShown={Math.random() > 0.5}
            onCardClick={handleClick}
        />
    ));
    // const flippedCards = allCards.filter((card) => card.props.isShown === true);
    // const flipCard = () => setIsCardShown((prev) => !prev);

    function handleClick() {
        switch (turnPhase) {
            case "noneTurned":
                // flip card

                setTotalClicks((prev) => prev + 1);
                break;
            case "oneTurned":
                // flip card
                setTotalClicks((prev) => prev + 1);
                break;
            case "twoTurned":
                // unflip both flipped cards
                break;
            default:
                break;
            // update turnPhase
        }
    }

    return (
        <>
            <div className="game-table">
                <div className="grid-container">{allCards}</div>
                <p>{`Turn Status: ${turnPhase}`}</p>
                <p>{`Click count: ${totalClicks}`}</p>
            </div>
        </>
    );
}
