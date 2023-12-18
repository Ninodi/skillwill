import React from 'react'
import useFetch from '../hooks/useFetch'

function BookList() {
  const {response} = useFetch({url: 'https://crudapi.co.uk/api/v1/books', method: 'GET'})
  console.log(response)
  return (
    <div>Book</div>
  )
}

export default BookList