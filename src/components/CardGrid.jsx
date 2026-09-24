
import { Card } from "./Card";

export function CardGrid({ cards, onClick, isFlipped }) {
  return (
    <div className="card-grid">
      {cards.map(card => {
        return (
          <Card
            key={card.name}
            card={card}
            onClick={onClick}
            isFlipped={isFlipped}
          />
        );
      })}
    </div>
  );
}

