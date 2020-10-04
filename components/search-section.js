import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import utilStyles from '../styles/utils.module.css'

export default function SearchSection() {
    return (
        <Container fluid className={utilStyles.padding10px}>
            <Row>
                <Col xs={{ span: 6, offset: 6 }} sm={{ span: 3, offset: 9 }} md={{ span: 3, offset: 9 }}>
                    <InputGroup size="sm" className="mb-3">
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-search"
                        />
                    </InputGroup>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    )
}