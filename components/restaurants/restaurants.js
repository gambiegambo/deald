import { Container, Row, Col, Image, Button, Table } from 'react-bootstrap'
import React, { useState } from 'react';

export function Restaurants({ promotion, index }) {
    const [isToggle, handleToggle] = useState(false);
    const border = index % 2 == 0 ? 'dealBlock' : ''
    const classes = `padding ${border}`
    return (
        <div>
            <Container fluid className={classes}>
                <Row>
                    <Col xs={12} sm={9} md={9}>
                        <Image src={promotion.picture_url} style={{ width: "100%", height: "200px" }} />
                    </Col>
                    <Col xs={12} sm={3} md={3}>
                        <Row>
                            <Col xs={12} sm={12} md={12}><h3></h3></Col>
                            <Col xs={12} sm={12} md={12}><h3>ราคาเริ่มต้น</h3></Col>
                            <Col xs={12} sm={12} md={12} style={{ textAlign: "right" }}>
                                <b style={{ fontSize: "60px" }}>{promotion.price}</b>
                                <b style={{ fontSize: "1.75rem" }}> บาท</b>
                            </Col>
                            <Col md={{ span: 10, offset: 1 }}>
                                <Button variant="outline-primary" style={{ width: "100%" }} onClick={() => handleToggle(!isToggle)}>
                                    เลือก v
                            </Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {isToggle && <Row className={`padding10px`}>
                    <Col xs={0} md={1}></Col>
                    <Col xs={12} md={10}>
                        <Table striped bordered hover size="sm" responsive>
                            <thead>
                                <tr>
                                    <th width="15%">Platform</th>
                                    <th width="15%">ช่วงเวลาโปรโมชั่น</th>
                                    <th width="20%">ประเภทส่วนลด</th>
                                    <th width="15%">ราคาเริ่มต้น</th>
                                    <th width="15%">ส่วนลดสูงสุด</th>
                                    <th width="20%">คลิ๊กรับส่วนลด</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promotion.platform.map(platform => (
                                    <tr>
                                        <td>{platform["link"] &&
                                            <Image src={platform["link"]} fluid />
                                        }
                                            {!platform["link"] &&
                                                <div>{platform["name"]}</div>
                                            }
                                        </td>
                                        <td>{platform["duration"]}</td>
                                        <td>{platform["type"]}</td>
                                        <td>{platform["start_price"]}</td>
                                        <td>{platform["max_discount"]}</td>
                                        <td><a href={platform["discount_link"]}>คลิ๊ก</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                }
            </Container>
            <style jsx global>{`
                .dealBlock {
                    border-color: salmon;
                    border-width: medium;
                    border-radius: 50px;
                    border-inline-end-style: none;
                    border-inline-start-style: none;
                    border-top-style: groove;
                    border-bottom-style: groove;
                    margin-bottom: 20px;
                }
                .padding {
                    padding-top: 30px;
                    padding-bottom: 30px;
                }
            }`}</style>
        </div>
    )
}