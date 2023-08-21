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

    const testH1 = <h1>He123llo</h1>;

    return (
        <>
            <div className="grid-container">
                {cards.map((img, index) => (
                    <CardView key={index} img={img} isRemoved={false} />
                ))}
            </div>
            {testH1}
        </>
    );
}
