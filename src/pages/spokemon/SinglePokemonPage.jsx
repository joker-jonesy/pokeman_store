import { useParams} from "react-router-dom";
import {useGetPokemonByNameQuery} from "../../reducers/pokemon.js";

function SinglePokemonPage(){

    const params = useParams();

    const {data, isLoading}= useGetPokemonByNameQuery(params.id)

    // console.log(data)
    return(
        <div className={"pokemonProduct"}>
            {isLoading?<h1>Loading....</h1>:<>
                <h1>{data.name}</h1>
                <img src={data.sprites.front_default}/>
                <h3>Height: {data.height}</h3>
            </>}
        </div>
    )
}

export default SinglePokemonPage;