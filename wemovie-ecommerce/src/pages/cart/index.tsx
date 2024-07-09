import { useContext } from "react";
import { ButtonAdd, CardProduct, Img, Price, SubTitle, TitleStyled, minus, plus, trash } from "../../components/cardProduct";
import { IconAction } from "../../components/cardProduct/iconAction";
import { InputStyled } from "../../components/cardProduct/inputStyled";
import { Col, Row } from "../../components/row";
import { ProductsContext } from "../../contexts/productsContext";
import { useFormat } from "../../hooks/useFormatPrice";
import { AreaTitle } from "../../components/cardProduct/areaTitle";
import empty from "../../assets/empty.png"
import { TitleCard } from "../../components/cardProduct/titleCard";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../constants/routes";

export function Cart() {

    const { products, handleMinusProduct, handleAddProduct, handleChangeAmount, handleRemove, handleClearCar } = useContext(ProductsContext)
    const { handleFormat } = useFormat()
    const navigate = useNavigate()

    if (!products.filter(item => item.inCart).length) {
        return <CardProduct maxWidth padding>
            <Row justifyContentCenter>
                <Col auto>
                    <TitleCard>
                        Parece que não há nada por aqui :(
                    </TitleCard>
                </Col>
            </Row>
            <Row justifyContentCenter>
                <Col auto>
                    <img src={empty} alt="empty" />
                </Col>
            </Row>
            <Row justifyContentCenter>
                <Col auto>
                    <ButtonAdd paddingInline onClick={() => window.location.reload()}>
                        Recarregar página
                    </ButtonAdd>
                </Col>
            </Row>
        </CardProduct>
    }

    return <CardProduct maxWidth padding>
        <Row mobile>
            <Col>
                <SubTitle>
                    Produto
                </SubTitle>
            </Col>
            <Col>
                <SubTitle>
                    QTD
                </SubTitle>
            </Col>
            <Col>
                <SubTitle>
                    SUBTOTAL
                </SubTitle>
            </Col>
        </Row>
        {products.map((product, index) => (
            product.inCart ?
                <Row borderBottom paddingBottom>
                    <Col auto alignItemsCenter>
                        <Img src={product.image} mobile />
                    </Col>
                    <Col>
                        <Row key={index} >
                            <Col alignItemsCenter gap sm>
                                <AreaTitle>
                                    <TitleStyled size>
                                        {product.title}
                                    </TitleStyled>
                                    <Price>
                                        {handleFormat(product.price)}
                                    </Price>
                                </AreaTitle>
                            </Col>
                            <Col alignItemsCenter gap sm6>
                                <IconAction src={minus} onClick={() => handleMinusProduct(index)} />
                                <InputStyled value={product.amount} onBlur={() => product.amount < 1 && handleChangeAmount(index, 1)} onChange={({ target }) => handleChangeAmount(index, Number(target.value.replace(/[^\d.-]/g, '')))} />
                                <IconAction src={plus} onClick={() => handleAddProduct(index)} />
                            </Col>
                            <Col alignItemsCenter justifyContentEndSm sm6>
                                <Price subTotal>
                                    {handleFormat((product.price * product.amount))}
                                </Price>
                            </Col>
                        </Row>
                    </Col>
                    <Col auto alignItemsCenter>
                        <IconAction mlAuto src={trash} onClick={() => handleRemove(index)} />
                    </Col>

                </Row>
                : null
        ))}
        <Row reverse>
            <Col sm>
                <ButtonAdd fitContent paddingInline maxWidth onClick={() => {
                    handleClearCar()
                    navigate(RoutesPath.PURCHASE)
                }}>
                    FINALIZAR PEDIDO
                </ButtonAdd>
            </Col>
            <Col alignItemsCenter gap justifyContentEnd justifyContentBetween>
                <SubTitle>
                    TOTAL
                </SubTitle>
                <Price large>
                    {handleFormat(products.reduce((acc, val) => val.amount ? acc + (val.amount * val.price) : acc, 0))}
                </Price>
            </Col>
        </Row>
    </CardProduct>
}