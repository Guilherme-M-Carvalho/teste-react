import { Link, useNavigate } from "react-router-dom";
import { RoutesApp } from "../routes";
import { GlobalStyle } from "../components/globalStyle";
import { Container } from "../components/container";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { Header, Logo, MyCar } from "../components/header";
import cart from "../assets/header.png"
import { RoutesPath } from "../constants/routes";

export function Pages() {

    const { handleSetProducts, handleFind, itemsAmount } = useContext(ProductsContext)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const products = await handleFind()
            handleSetProducts(products)
        })()
    }, [handleFind])

    return (
        <>
            <Container>
                <GlobalStyle />
                <Header>
                    <Link to={RoutesPath.HOME} style={{ fontStyle: "normal", textDecoration: "none", color: "white" }}>
                        <Logo>WeMovies</Logo>
                    </Link>
                    <MyCar onClick={() => navigate(RoutesPath.CART)}>
                        <div>
                            <span>
                                Meu Carrinho
                            </span>
                            {itemsAmount} itens
                        </div>
                        <img src={cart} alt="carrinho" />
                    </MyCar>
                </Header>
                <main>
                    <RoutesApp />
                </main>
            </Container>
        </>
    )
}
