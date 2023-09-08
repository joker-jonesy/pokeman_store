import {useSelector} from "react-redux";
import SinglePokemon from "../../components/SinglePokemon.jsx";
function CartPage(){

    const cart = useSelector(state=>state.cart)||[];
    console.log(cart);

    return (
        <>
            {cart.map((i, idx)=> <SinglePokemon idx={idx} key={i} cart={true} name={i}/>)}
        </>
    )
}

export default CartPage;