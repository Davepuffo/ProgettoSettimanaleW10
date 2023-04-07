import { useParams } from "react-router-dom"
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'


const Details = () => {
    const params = useParams()
    console.log(params)
    const [city, setCity] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const prendiMeteo = () => {
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + params.nameCity + '&appid=66365a4caede04f233873d1adcdbe9f5')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setCity(data.list)
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
        <Container>
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
            <Row>
                <Col xs={10} className="mx-auto mb-5">
                    <h2>Here is the weather for the next 40 days!!</h2>
                    <ol>
                        {city.map((cityData) => (
                            <li key={cityData.dt}>{cityData.weather[0].main} - Temp Max: {cityData.main.temp_max}°F - Temp Min: {cityData.main.temp_min}°F - Humidity: {cityData.main.humidity}%</li>
                        ))}
                    </ol>
                </Col>
            </Row>
        </Container >
    )
}



export default Details