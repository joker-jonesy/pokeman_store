import {useGetPokemonByNameQuery} from "../reducers/pokemon.js";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../reducers/cart.js";

function SinglePokemon(props){

    const {data, error, isLoading}= useGetPokemonByNameQuery(props.name);
    const dispatch = useDispatch();

    const eventHandleP = (event)=>{
        event.preventDefault();
        dispatch(addToCart(data.name));
    }

    const eventHandleC = (event)=>{
        event.preventDefault();
        dispatch(removeFromCart(props.idx));
    }

    // console.log(data)
    return(
        <div className={"pokemonProduct"}>
            {isLoading?<h1>Loading....</h1>:<Link to={`/pokemon/${data.name}`}>
                <h1>{data.name}</h1>
                <img src={data.sprites.front_default}/>
                {props.cart?<button onClick={eventHandleC}>Remove from Cart</button>:<button onClick={eventHandleP}>Add to Cart</button>}
            </Link>}
        </div>
    )
}

export default SinglePokemon;