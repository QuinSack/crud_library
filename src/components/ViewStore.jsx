import React, { useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'

const ViewStore = () => {
    const [books, setBooks] = useState([]);
  return (
    <Container style={{marginTop: '20px'}}>
        <button style={{marginBottom: '10px'}}>Refresh</button>
        <Row>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <th>#</th>
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{textAlign: 'center'}}>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button style={{backgroundColor: 'gray', color: 'white'}}>Edit</button>
                            <button style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                        </td>
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>
                            <button style={{backgroundColor: 'gray', color: 'white'}}>Edit</button>
                            <button style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Row>
    </Container>
  )
}

export default ViewStore