import { Container, Row, Col } from 'react-bootstrap'
import { Restaurants } from './restaurants/restaurants'

export default function DealSection({ promotions }) {
    return (
        <Container fluid className={`padding10px`}>
            <Row>
                <Col xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }}>
                    {promotions.map((promotion, index) => (
                        <Restaurants promotion={promotion} index={index}></Restaurants>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}