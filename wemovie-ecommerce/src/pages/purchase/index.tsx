import { ButtonAdd, CardProduct } from "../../components/cardProduct";
import { TitleCard } from "../../components/cardProduct/titleCard";
import { Col, Row } from "../../components/row";
import purchase from "../../assets/purchase.png"
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../constants/routes";

export function Purchase() {

    const navigate = useNavigate()

    return <CardProduct maxWidth padding>
        <Row justifyContentCenter>
            <Col auto>
                <TitleCard>
                    Compra realizada com sucesso!
                </TitleCard>
            </Col>
        </Row>
        <Row justifyContentCenter>
            <Col auto>
                <img src={purchase} alt="purchase" />
            </Col>
        </Row>
        <Row justifyContentCenter>
            <Col auto>
                <ButtonAdd paddingInline onClick={() => navigate(RoutesPath.HOME)}>
                    VOLTAR
                </ButtonAdd>
            </Col>
        </Row>

    </CardProduct>
}