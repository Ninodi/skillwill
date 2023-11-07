import React from 'react';


function BookCard({title, author, image, summary, characters}) {
    const logBookInfo = () => {
        let info = {
            title: title,
            author: author,
            image: image,
            summary: summary,
            character: characters
        }
    
        console.log(info)
    }

    return (
        <div className='book-container'>
           <h1 className="book-title">
                <span>{title} </span> by {author}
           </h1>
           <div className="book-cover">
                <img src={image} alt={title} />
           </div>
           <h2>Summary</h2>
           <p className="book-descr">{summary}</p>
           <h3>Characters</h3>
           <div className="characters">
            {characters.map((character, index) => (
                <span key={index}>
                    {character}
                    {index !== characters.length - 1 ? ', ' : ''}
                </span>
                ))}
           </div>
           <button onClick={logBookInfo}>Log Book Info</button>
        </div>
    );
}

export default BookCard;