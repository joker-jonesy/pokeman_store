import Content from "../../components/Content.jsx";
import {useGetPokemonQuery} from "../../reducers/pokemon.js";
import SinglePokemon from "../../components/SinglePokemon.jsx";

function PokemonPage(){

    const {data, error, isLoading} = useGetPokemonQuery();

    console.log(data);

    return (
        <>
            <Content>
                {isLoading?<h1>Loading....</h1>:data.results.map((i)=>
                    <SinglePokemon key={i} cart={false} name={i.name}/>
                )}
            </Content>
        </>
    )
}

export default PokemonPage;