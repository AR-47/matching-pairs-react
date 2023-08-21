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

    return (
        <>
            <div className="grid-container">
                {cards.map((img, index) => (
                    <CardView
                        key={index}
                        img={img}
                        isShown={Math.random() > 0.5}
                    />
                ))}
            </div>
        </>
    );
}
