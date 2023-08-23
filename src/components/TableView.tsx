import { useState } from "react";
import { CardObj, generateGameCards } from "../util/generateGameCards";
import { CardView } from "./CardView";
import "./TableView.css";
import { flipCard } from "../util/flipCard";
import { removeCard } from "../util/removeCard";
import { areTwoCardsTheSame } from "../util/areTwoCardsTheSame";

const emojiList: string[] =
    "🐵 🦧 🐶 🐕 🐩 🐺 🦊 🐱 🐈 🐈‍⬛ 🦁 🐯 🐅 🐆 🐴 🐎 🦄 🦓 🦌 🦬 🐮 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🦙 🦒 🐘 🦣 🦏 🦛 🐭 🐀 🐹 🐰 🐇 🐿️ 🦫 🦔 🦇 🐻 🐨 🐼 🦥 🦘 🦡 🦃 🐔 🐤 🐥 🐧 🕊️ 🦅 🦆 🦢 🦉 🦩 🦚 🦜 🐸 🐊 🐢 🦎 🐍 🐲 🦕 🦖 🐳 🐬 🦭 🐠 🐡 🦈 🐙 🐚 🐌 🦋 🐛 🐜 🐝 🐞 🦗 🕷️ 🦂 🦞 🦐 🦑 ⛄".split(
        " "
    );
const gameCards: CardObj[] = generateGameCards(emojiList);

export function TableView(): JSX.Element {
    type TurnPhaseType =
        | { phase: "noneTurned" }
        | { phase: "oneTurned"; cardOneId: string }
        | { phase: "twoTurned"; cardOneId: string; cardTwoId: string };

    const [turnPhase, setTurnPhase] = useState<TurnPhaseType>({
        phase: "noneTurned",
    });
    const [totalClicks, setTotalClicks] = useState<number>(0);

    const allCardViews = gameCards.map((card: CardObj) => (
        <CardView
            key={card.id}
            card={card}
            onCardClick={() => handleClick(card)}
        />
    ));

    function handleClick(card: CardObj) {
        switch (turnPhase.phase) {
            case "noneTurned":
                flipCard(card);
                setTurnPhase({ phase: "oneTurned", cardOneId: card.id });
                setTotalClicks((prev) => prev + 1);
                break;
            case "oneTurned":
                flipCard(card);
                setTurnPhase({
                    ...turnPhase,
                    phase: "twoTurned",
                    cardTwoId: card.id,
                });
                setTotalClicks((prev) => prev + 1);
                console.log("IDs of flipped card: ", turnPhase.cardOneId);
                break;
            case "twoTurned": {
                const cardOne = gameCards.filter(
                    (card) => card.id === turnPhase.cardOneId
                )[0];
                const cardTwo = gameCards.filter(
                    (card) => card.id === turnPhase.cardTwoId
                )[0];
                if (areTwoCardsTheSame(cardOne, cardTwo)) {
                    removeCard(cardOne);
                    removeCard(cardTwo);
                } else {
                    flipCard(cardOne);
                    flipCard(cardTwo);
                }
                setTurnPhase({ phase: "noneTurned" });
                break;
            }
            default:
                break;
        }
    }

    return (
        <>
            <div className="game-table">
                <div className="grid-container">{allCardViews}</div>
                <p>{`Turn Status: ${turnPhase.phase}`}</p>
                <p>{`Click count: ${totalClicks}`}</p>
            </div>
        </>
    );
}
