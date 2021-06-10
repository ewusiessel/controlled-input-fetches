import {Carousel, Container, Col, Row} from "react-bootstrap"
import items from '../Data/movies.json'


const Home = () => {

    return (
        <Container>
            <Row className='justify-content-center mt-5'>
                <h1 className="text-center text-muted">
                    Welcome to Moviescape
                </h1>
                <Col xs={12} md={6}>
                    <Carousel>
                        {
                            items.map(item => (
                                <Carousel.Item>
                                    <img style={{borderRadius: '10px'}}
                                         className="d-block w-100"
                                         src={item.imageUrl}
                                         alt="movie name"
                                    />
                                    <Carousel.Caption>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )

}

export default Home