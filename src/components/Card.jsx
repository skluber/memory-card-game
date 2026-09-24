export function Card({ pokemon }) {
    return (
        <div className="card">
            <div className="card-photo">
                <img src={pokemon.image} />
            </div>
            <div className="card-name">{pokemon.name}</div>
        </div>
    )
}