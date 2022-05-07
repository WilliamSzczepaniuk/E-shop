import ListProducts from "../../Components/List Products"
import { Container } from "./styles"

const PageHome =() =>{

    return(
        <Container>
            <header>
                <h1>Kenzie<strong>Shop</strong> </h1>
                <button className="button_cart">Cart</button>
            </header>
            <main>
                <ListProducts/>    
            </main>  
        </Container>
    )

}

export default PageHome