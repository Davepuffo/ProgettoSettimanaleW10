import Container from "react-bootstrap/esm/Container"
import CardCity from "./CardCity"
import Row from "react-bootstrap/esm/Row"

const Home = () => {
    return (
        <Container>
            <h2>Discover the weather in Europe's most popular citiese </h2>
            <Row>
                <CardCity query="London" />
                <CardCity query="Madrid" />
                <CardCity query="Vienna" />
                <CardCity query="Berlin" />
            </Row>
            <h2>Discover the weather in Italy's most popular cities </h2>
            <Row>
                <CardCity query="Milan" />
                <CardCity query="Venice" />
                <CardCity query="Rome" />
                <CardCity query="Naples" />
            </Row>
        </Container>
    )
}

export default Home