
import { Container } from "./styles"

import Card from "../Card"
const ListProducts = ({products, cartItem}) => {
    


    return(
        <Container >
            {products.map((product)=>(
                <Card 
                cartItem={cartItem}
                key={product.id}
                product={product}></Card>
            ))}
        </Container>
    )


}
export default ListProducts