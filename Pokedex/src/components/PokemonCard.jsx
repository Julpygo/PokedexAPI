export default function PokemonCard({pokemon}){
    return(
        <div className="card text-center">
            <img className="card-img-top p-3" src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            <h3>{pokemon.name}</h3>
            <p>ID: {pokemon.id}</p>
        </div>
    )
}