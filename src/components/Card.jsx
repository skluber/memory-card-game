
export function Card({ card, onClick, isFlipped }) {
  return (
    <div className="card" onClick={() => onClick(card)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <div className="card-photo">
            <img src={card.image} />
          </div>

          <div className="card-name">
            {card.name}
          </div>
        </div>

        <div className="card-back">
          <span>?</span>
        </div>
      </div>
    </div>
  );
}
