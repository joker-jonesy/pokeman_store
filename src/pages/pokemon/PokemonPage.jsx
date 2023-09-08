import Content from "../../components/Content.jsx";
import {useGetPokemonQuery} from "../../reducers/pokemon.js";
import SinglePokemon from "../../components/SinglePokemon.jsx";

function PokemonPage(){

    const {data, isLoading} = useGetPokemonQuery();

    return (
        <>
            <Content>
                {isLoading?<h1>Loading....</h1>:data.results.map((i,idx)=>
                    <SinglePokemon key={idx} cart={false} name={i.name}/>
                )}
            </Content>
        </>
    )
}

export default PokemonPage;