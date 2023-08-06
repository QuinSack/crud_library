import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Modal, Form, Button } from 'react-bootstrap'
import {getDocs, collection, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {db} from '../configs/firebase'

const ViewStore = () => {
    const [books, setBooks] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false); 
    const [selectedBook, setSelectedBook] = useState(null);
    const [updatedBookData, setUpdatedBookData] = useState({title: '', author: ''});

    //handler to open the edit form
    const openEditForm = (book) => {
    setSelectedBook(book);
    setUpdatedBookData({title: book.data.title,author: book.data.author});
    setShowEditForm(true);
  };

    //handler to close the edit form
    const closeEditForm = () => {
    setSelectedBook(null);
    setShowEditForm(false);
  };

    const submitEditForm = async () => {
    try {
      const docRef = doc(db, 'books', selectedBook.id);
      await updateDoc(docRef, updatedBookData);
      // Refresh the books list after updating
      getBooks();
      closeEditForm();
    } catch (error) {
      console.error(error);
    }
  };

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

    const updateBook = async (id) => {
        const docreference = doc(db, "books", id)
        await updateDoc()
    }
    
    //delete book from store
    const deleteBook = async (id) => {
        const docRef = doc(db, "books", id);
        try{
            const deleteBookItem = await deleteDoc(docRef);
            console.log(deleteBookItem);
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
        <h4><strong>AVAILABLE BOOKS</strong></h4>
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
                    {
                        books.map((book, index) => {
                            return <tr style={{textAlign: 'center'}}>
                            <td>{index + 1}</td>
                            <td>{book.data.title}</td>
                            <td>{book.data.author}</td>
                            <td>
                                <button style={{backgroundColor: 'gray', color: 'white'}} onClick={() => openEditForm(book)}>Edit</button>
                                <button style={{backgroundColor: 'red', color: 'white'}} onClick={()=>deleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </Table>
        </Row>
        <Modal show={showEditForm} onHide={closeEditForm}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <input type='text' placeholder='New Book Title' style={{width: '60%'}} value={updatedBookData.title} onChange={(e) => setUpdatedBookData({...updatedBookData,title: e.target.value})} />
                <input type='text' placeholder='New Book Author' style={{width: '60%'}} value={updatedBookData.author} onChange={(e) => setUpdatedBookData({...updatedBookData,author: e.target.value})} />
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeEditForm}>
                Close
            </Button>
            <Button variant="primary" onClick={submitEditForm}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </Container>
  )
}

export default ViewStore