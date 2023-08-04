import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {db} from '../configs/firebase'
import { collection, addDoc} from 'firebase/firestore'

const AddBook = () => {
    //const [books, setBooks] = useState([])
    const [title, setTitle]  = useState("");
    const [author, setAuthor] = useState("");


    async function handleAdd(e) {
        e.preventDefault();

        const booksCollectionRef = collection(db, 'books');

        try {
            const response = await addDoc(booksCollectionRef, { title: title, author: author });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Container style={{marginTop: '40px'}}>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
            <Col xs={6}>
                <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <input type='text' placeholder='Book Title' value={title} style={{width: '60%', height: '40px'}} onChange={(e) => setTitle(e.target.value)} />
                    <input type='text' placeholder='Book Author' value={author} style={{width: '60%', height: '40px'}} onChange={(e) => setAuthor(e.target.value)} />
                    <button style={{backgroundColor: '#3F3FF5', color: 'white', padding: '10px', width: '60%'}} onClick={handleAdd} type='submit'><strong>Submit Book Details</strong></button>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default AddBook