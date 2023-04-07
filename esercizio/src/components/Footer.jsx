import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
    return (
        <Container fluid className="bg-light">
            <Row className="py-3">
                <Col><img src="https://w-static.meteosuper.it/public/icons/meteo_516x120.png" height={20} alt="logo" /></Col>
                <Col>Last updated on Friday, April 07 at 11:05 a.m.</Col>
            </Row>
            <Row><p>Copyright © 1999-2023 Dave S.p.A. Direzione Business Digital - P.Iva 03792073920 - Tutti i diritti riservati - Per la pubblicità Dave S.p.a. RTI spa, Gruppo FallaGrossa - Sede legale: 20141 Milano Via Neera 33 - Cap. Soc. € 500.000.000,00 int. vers. - Registro delle Imprese di Roma, C.F.03792073920</p></Row>
        </Container>
    )
}

export default Footer