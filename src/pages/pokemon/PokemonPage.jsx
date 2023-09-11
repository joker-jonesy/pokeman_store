import Content from "../../components/Content.jsx";
import {useGetPokemonQuery} from "../../reducers/pokemon.js";
import SinglePokemon from "../../components/SinglePokemon.jsx";
import {useState} from "react";

function PokemonPage(){

    const {data, isLoading} = useGetPokemonQuery();

    const [input,setInput]=useState("");

    return (
        <>
            <Content>
                <input type={"text"} onChange={(event)=>setInput(event.target.value)}/>
                {isLoading?<h1>Loading....</h1>: input.trim().length>0? data.results.filter(i=>i.name.includes(input)).map((i,idx)=>
                    <SinglePokemon key={idx} cart={false} name={i.name}/>) :data.results.map((i,idx)=>
                    <SinglePokemon key={idx} cart={false} name={i.name}/>
                )}
            </Content>
        </>
    )
}

export default PokemonPage;