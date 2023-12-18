import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRequest from '../hooks/useRequest'

function BookForm() {
  const navigate = useNavigate()
  const {sendRequest} = useRequest({url: 'https://crudapi.co.uk/api/v1/books', method: 'POST'})
  const [bookName, setBookName] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookRating, setBookRating] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookData = {
        bookName,
        bookAuthor,
        bookRating
      };
      await sendRequest([bookData]);
      navigate('/books');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' onChange={(e) => setBookName(e.target.value)} value={bookName}/>
            <input type="text" placeholder='Author' onChange={(e) => setBookAuthor(e.target.value)} value={bookAuthor}/>
            <input type="number" min="1" max="5" step="0.5" placeholder='Rating' onChange={(e) => setBookRating(e.target.value)} value={bookRating}/>
            <button>Add Book</button>
        </form>
    </div>
  )
}

export default BookForm