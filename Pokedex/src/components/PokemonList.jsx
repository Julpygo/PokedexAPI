import{useState, useEffect} from "react"
import { getPokemon } from "../services/pokeapi"

export default function PokemonList(){
    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const data = await getPokemon(10)
            setPokemons(data)
        }
        fetchData()
    }
    ,[])
    return(
        <>
            <div></div>
        </>
    )
}