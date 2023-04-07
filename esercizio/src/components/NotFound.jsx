import Button from "react-bootstrap/esm/Button"
import Container from "react-bootstrap/esm/Container"
import { Navigate, useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <h2>Attenzione!! Città non trovata, si prega di effettuare un'altra ricerca</h2>
            <Button onClick={() => { navigate('/') }}>TORNA ALLA HOME</Button>
        </Container>
    )
}

export default NotFound