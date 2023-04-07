import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';


const CardCity = ({ query }) => {
    const [city, setCity] = useState(null)
    const [icon, setIcon] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const prendiMeteo = () => {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=66365a4caede04f233873d1adcdbe9f5')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setCity(data)
                    setIcon('http://openweathermap.org/img/w/' + data.weather[0].icon + '.png')
                    console.log(icon)
                    setIsLoading(false)
                })
                .catch(() => {
                    setIsLoading(false)
                    setIsError(true)
                });
        }
        prendiMeteo()
    }, [])

    return (

        <Col xs={6} md={3}>
            {isError && (
                <Alert variant="danger">Something has gone wrong!</Alert>
            )}
            {isLoading && (
                <div className="text-center">
                    <Spinner animation="border" role="status" variant="success">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {city &&
                <Card className='my-4'>
                    <Card.Body>
                        <Card.Title>{city.name}</Card.Title>
                        <Card.Text>
                            <img src={icon} alt="" />
                            <p>Temp Max: {city.main.temp_max}°F</p>
                            <p>Temp Min: {city.main.temp_min}°F</p>
                            <p>Humidity: {city.main.humidity}%</p>
                        </Card.Text>
                        <Link to={"/details/" + `${city.name}`}>Scopri di più!</Link>
                    </Card.Body>
                </Card>}
        </Col>

    )
}


export default CardCity;

