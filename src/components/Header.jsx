import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <Container style={{width: '100%'}}>
        <Row style={{backgroundColor: 'black', padding: '10px'}}>
            <Col style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                <h3 style={{color: 'white'}}>Thank You Small Library</h3>
            </Col>
            <Col style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'right'}}>
                <button style={{ border: 'none', fontSize: '1.3rem'}}>Reviews</button>
                <section style={{display: 'flex', gap: '15px'}}>
                    <button style={{ border: 'none', fontSize: '1.3rem'}}>Sign Up</button>
                    <button style={{ border: 'none', fontSize: '1.3rem'}}>Sign In</button>
                </section>
            </Col>
        </Row>
    </Container>
  )
}

export default Header