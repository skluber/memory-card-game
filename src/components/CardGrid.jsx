import { Card } from "./Card"
export function CardGrid({ cards, onClick }) {
    return (
        <div className="card-grid">

            {cards.map(card => {
                return <Card 
                key={card.name} 
                card={card} 
                onClick={onClick}
                />
            })}

        </div>
    )
}