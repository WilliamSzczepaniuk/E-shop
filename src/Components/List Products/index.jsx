import { useContext } from "react"
import { Container } from "./styles"
import { ProductsContext } from "../../Providers/Products"
import Card from "../Card"
const ListProducts = () => {
    
    const { products } = useContext(ProductsContext)
    console.log(products)
    return(
        <Container>
            {products.map((product)=>(
                <Card 
                key={product.id}
                product={product}></Card>
            ))}
        </Container>
    )


}
export default ListProducts