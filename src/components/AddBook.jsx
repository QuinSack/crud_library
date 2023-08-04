import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AddBook = () => {
  return (
    <Container style={{marginTop: '40px'}}>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
            <Col xs={6}>
                <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <input type='text' placeholder='Book Title' style={{width: '60%', height: '40px'}} />
                    <input type='text' placeholder='Book Author' style={{width: '60%', height: '40px'}}/>
                    <button style={{backgroundColor: '#3F3FF5', color: 'white', padding: '10px', width: '60%'}}><strong>Submit Book Details</strong></button>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default AddBook