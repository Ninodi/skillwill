import React, { useEffect, useState } from 'react'
import { Book } from '../interfaces/book.interface';

function BookList() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://crudapi.co.uk/api/v1/books', {
                    method: 'GET',
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
                    }
                });
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBooks();
    }, []);

  return (
    <div>
        hiii
        {/* {books.map((book) => (
            <div key={book.id} className="book-container">
                <h3>{book.name}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
            </div>
        ))} */}
    </div>
  )
}

export default BookList