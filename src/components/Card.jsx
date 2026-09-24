export function Card({ card }) {
    return (
        <div className="card">
            <div className="card-photo">
                <img src={card.image} />
            </div>
            <div className="card-name">{card.name}</div>
        </div>
    )
}