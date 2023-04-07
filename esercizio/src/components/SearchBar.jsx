import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const SearchBar = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [city, setCity] = useState([])
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + query + '&appid=66365a4caede04f233873d1adcdbe9f5'
            )
            if (response.ok) {
                const data = await response.json()
                setCity(data.list)
                console.log(data)
            } else {
                alert('City not found!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Row>
                <h2 className='my-3'>Search the weather for the location of your choice</h2>
                <Col xs={10} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            value={query}
                            onChange={handleChange}
                            placeholder="Cerca il meteo della località che preferisci e premi 'ENTER'"
                        />
                    </Form>
                </Col>
                <Col xs={10} className="mx-auto mb-5">
                    <ul>
                        {city.map((cityData) => (
                            <li key={cityData.dt}>{cityData.weather[0].main} - Temp Max: {cityData.main.temp_max}°F - Temp Min: {cityData.main.temp_min}°F - Humidity: {cityData.main.humidity}%</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar
