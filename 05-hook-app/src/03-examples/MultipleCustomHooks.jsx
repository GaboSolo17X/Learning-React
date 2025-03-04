
import { useCounter, useFetch } from "../Hook"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";
export const MultipleCustomHooks = () => {
    const {counter,substract,increment}=useCounter(1)
    const {data,isLoading,hasError}=useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
        <h1>Informacion de Pokemon</h1>
        <hr></hr>
        {isLoading 
        ? <LoadingMessage/> 
        : <PokemonCard 
            id={counter} 
            name={data.name}
            sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_defaults,
                data.sprites.back_shiny,
            ]}
          />}
        <pre>{data?.name}</pre>
        <button
          className="btn btn-primary mt-2"
          onClick={()=>counter>1?substract():null}
        >
            Anterior
        </button>
        <button
          className="btn btn-primary mt-2"
          onClick={()=>increment()}
        >
            Siguiente
        </button>
    </>
  )
}
