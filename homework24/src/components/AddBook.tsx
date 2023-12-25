import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface AddBookFormData {
    name: string;
    author: string;
    genre: string;
}
function AddBook() {
    const [formData, setFormData] = useState<AddBookFormData>({
        name: '',
        author: '',
        genre: '',
    })

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('https://crudapi.co.uk/api/v1/books', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            navigate('/book-list')
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Book Name'/>
        <input type="text" placeholder='Book Author'/>
        <input type="text" placeholder='Book Genre'/>
        <button type="submit">Add Book</button>
    </form>
  )
}

export default AddBook