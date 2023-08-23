import { useState } from "react";
import { CardObj, generateGameCards } from "../util/generateGameCards";
import { CardView } from "./CardView";
import "./TableView.css";

export function TableView(): JSX.Element {
    const emojiList: string[] =
        "🐵 🦧 🐶 🐕 🐩 🐺 🦊 🐱 🐈 🐈‍⬛ 🦁 🐯 🐅 🐆 🐴 🐎 🦄 🦓 🦌 🦬 🐮 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🦙 🦒 🐘 🦣 🦏 🦛 🐭 🐀 🐹 🐰 🐇 🐿️ 🦫 🦔 🦇 🐻 🐨 🐼 🦥 🦘 🦡 🦃 🐔 🐤 🐥 🐧 🕊️ 🦅 🦆 🦢 🦉 🦩 🦚 🦜 🐸 🐊 🐢 🦎 🐍 🐲 🦕 🦖 🐳 🐬 🦭 🐠 🐡 🦈 🐙 🐚 🐌 🦋 🐛 🐜 🐝 🐞 🦗 🕷️ 🦂 🦞 🦐 🦑 ⛄".split(
            " "
        );
    const gameCards: CardObj[] = generateGameCards(emojiList);

    type TurnPhase =
        | { phase: "noneTurned" }
        | { phase: "oneTurned"; cardOneId: string }
        | { phase: "twoTurned"; cardOneId: string; cardTwoId: string };

    const [turnPhase, setTurnPhase] = useState<TurnPhase>({
        phase: "noneTurned",
    });
    const [totalClicks, setTotalClicks] = useState<number>(0);

    const allCardViews = gameCards.map((card: CardObj) => (
        <CardView
            key={card.id}
            img={card.emoji}
            isShown={Math.random() > 0.5}
            onCardClick={() => handleClick(card.id)}
        />
    ));
    // const flipCard = () => setIsCardShown((prev) => !prev);

    function handleClick(cardId: string) {
        switch (turnPhase.phase) {
            case "noneTurned":
                // flip card
                setTurnPhase({ phase: "oneTurned", cardOneId: cardId });
                setTotalClicks((prev) => prev + 1);
                break;
            case "oneTurned":
                // flip card
                setTotalClicks((prev) => prev + 1);
                console.log(turnPhase.cardOneId);
                break;
            case "twoTurned":
                alert(
                    "Are the gameCards a match?" +
                        turnPhase.cardOneId +
                        turnPhase.cardTwoId
                );

                // unflip both flipped gameCards
                break;
            default:
                break;
            // update turnPhase
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
