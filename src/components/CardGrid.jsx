import { Card } from "./Card"
export function CardGrid({ cards }) {
    return (
        <div className="card-grid">

            {cards.map(card => {
                return <Card 
                key={card.name} 
                card={card} 
                />
            })}

        </div>
    )
}