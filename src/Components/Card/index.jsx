import { Container } from "./styles"
import { useContext } from "react"
import { CartContext } from "../../Providers/Cart"



const Card = ({product, cartItem}) => {

    const { addToCart, productsCart, removeFromCart  } = useContext(CartContext)

    const { image, title, description, price } = product


    return (
        <Container>
            <img 
                alt={title}
                src={image}/>
            <span>
                <h5>{title}</h5>
                <p>{description}</p>
                <h4>{price.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</h4>
            </span>
            {cartItem ? 
            (<button onClick={() =>removeFromCart(product)}>Remove from cart</button>)
            :(<button onClick={() =>addToCart(product)}>Add to cart</button>)}
        </Container>
    )
}
export default Card