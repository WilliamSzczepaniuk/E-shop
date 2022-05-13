import ListProducts from "../../Components/List Products"
import { Container } from "./styles"
import Header from "../../Components/Header"
import { ProductsContext } from "../../Providers/Products"
import { useContext } from "react"

const PageHome =() =>{
    
    const { products } = useContext(ProductsContext)
    return(
        <Container>
            <Header onCart = {false}/>
            <h2>Eletronics</h2>
            <main>
                <ListProducts cartItem={false} products={products}/>    
            </main>  
        </Container>
    )

}

export default PageHome