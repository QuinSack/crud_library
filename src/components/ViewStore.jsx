import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../configs/firebase'

const ViewStore = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async() => {
        const bookscollectionref = collection(db, "books");
        try{
            const fetchBooks = await getDocs(bookscollectionref);
            //setBooks(fetchBooks.docs.map((doc) => {doc.data(), doc.id}))
            const assignBooks = fetchBooks.docs.map(doc => ({data: doc.data(),id: doc.id}));
            setBooks(assignBooks);
            //console.log(fetchBooks.docs);
            //console.log(books);
        }catch(err){
            console.error(err);
        }
        }
    
    useEffect(() => {
        getBooks();
    },[])

    useEffect(() => {
        console.log(books);
    },[books])

  return (
    <Container style={{marginTop: '20px'}}>
        <button style={{marginBottom: '10px'}} onClick={() => getBooks()}>Refresh</button>
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
                    {
                        books.map((book) => {
                            return <tr style={{textAlign: 'center'}}>
                            <td>2</td>
                            <td>{book.data.title}</td>
                            <td>{book.data.author}</td>
                            <td>
                                <button style={{backgroundColor: 'gray', color: 'white'}}>Edit</button>
                                <button style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </Table>
        </Row>
    </Container>
  )
}

export default ViewStore