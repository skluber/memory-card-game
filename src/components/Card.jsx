export function Card({ card, onClick }) {
    return (
        <div className="card" onClick={() => onClick(card)}>
            <div className="card-photo">
                <img src={card.image} />
            </div>
            <div className="card-name">{card.name}</div>
        </div>
    )
}