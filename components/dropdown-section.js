import { Container, Row, Col } from 'react-bootstrap'
import { CategoriesDropdown } from './dropdowns/categories-dropdown'
import { LocationsDropdown } from './dropdowns/locations-dropdown'
import utilStyles from '../styles/utils.module.css'

export default function DropdownSection({locations, categories}) {
    return (
        <Container fluid className={utilStyles.filterArea}>
            <Row className="justify-content-md-center">
                <Col sm={2} md={2}></Col>
                <Col xs={6} sm={4} md={4}>
                    <CategoriesDropdown categories={categories}></CategoriesDropdown>
                </Col>
                <Col xs={6} sm={4} md={4}>
                    <LocationsDropdown locations={locations}></LocationsDropdown>
                </Col>
                <Col sm={2} md={2}></Col>
            </Row>
        </Container>
    )
}