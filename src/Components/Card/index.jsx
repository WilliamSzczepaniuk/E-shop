import { Container } from "./styles"

const Card = ({product}) => {

    const { image, title, description, price } = product
    return (
        <Container>
            <img 
                alt={title}
                src={image}/>
            <span>
                <h5>{title}</h5>
                <p>{description}</p>
                <h4>{price}</h4>
            </span>
        </Container>
    )
}
export default Card