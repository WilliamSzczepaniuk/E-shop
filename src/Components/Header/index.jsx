import {useNavigate } from "react-router-dom"
import { Container } from "./styles"


const Header = ({onCart = false}) =>{
    const navigate = useNavigate()
    const routesButton = () =>{
        onCart === true ? (navigate('/')) : (navigate('/cart'))
    }

    return(
        <Container>
            <h1>Kenzie<strong>Shop</strong></h1>
            {onCart === true ?( <button onClick={routesButton}>Home</button>):( <button onClick={routesButton}>Cart</button>)}
           
        </Container>
    )
}
export default Header