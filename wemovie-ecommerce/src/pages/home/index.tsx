import { useContext } from "react"
import { CardProduct, Img, TitleStyled, Price, ButtonAdd, IconAdd, add } from "../../components/cardProduct"
import { ProductsContext } from "../../contexts/productsContext"
import { Row, Col } from "../../components/row"
import { Spinner, SpinnerLogo } from "../../components/spinner"
import { useFormat } from "../../hooks/useFormatPrice"

export function Home() {

    const { products, isPending, handleAddProduct } = useContext(ProductsContext)
    const { handleFormat } = useFormat()

    if (isPending) {
        return <Row justifyContentCenter>
            <Col auto>
                <Spinner src={SpinnerLogo} />
            </Col>
        </Row>
    }
    return <Row justifyContentCenter mb>
        {products.map((product, index) => (
            <Col auto key={product.id}>
                <CardProduct>
                    <Img src={product.image} />
                    <TitleStyled>
                        {product.title}
                    </TitleStyled>
                    <Price>
                        {handleFormat(product.price)}
                    </Price>
                    <ButtonAdd green={!!product.amount} onClick={() => handleAddProduct(index)} >
                        <IconAdd src={add} />
                        <span>
                            {product.amount}
                        </span>
                        ADICIONAR AO CARRINHO
                    </ButtonAdd>
                </CardProduct>
            </Col>
        ))}
    </Row>
}
