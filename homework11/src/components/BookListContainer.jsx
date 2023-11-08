import React from 'react';
import BookCard from './BookCard';


const bookInfo = [
    {title: 'Mahabharata', author: "Vyasa", image: "https://m.media-amazon.com/images/I/91uIIc5KsOS._AC_UF1000,1000_QL80_.jpg", summary: "The Mahābhārata is one of the two major Sanskrit epics of ancient India revered in Hinduism, the other being the Rāmāyaṇa. It narrates the events and aftermath of the Kurukshetra War, a war of succession between two groups of princely cousins, the Kauravas and the Pāṇḍavas.", characters: ["Duryodhana", "Arjun", "Draupadi", "Dhritarashtra"], bookId: 3},
    {title: 'The Odyssey', author: "Homer", image: "https://m.media-amazon.com/images/I/71VoFhh11hL._AC_UF1000,1000_QL80_.jpg", summary: "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern audiences. As with the Iliad, the poem is divided into 24 books. It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War.", characters: ["Odysseus", "Telemachus", "Penelope"], bookId: 2},
    {title: 'Jane Eyre', author: "Charlotte Brontë", image: "https://m.media-amazon.com/images/I/61F2kZtma8L._AC_UF1000,1000_QL80_.jpg", summary: "Jane Eyre, a governess, manages to find her true love in Edward Rochester, the owner of an old mansion. However, Edward has a dark secret which will destroy Jane's life forever.", characters: ["Jane Eyre", "Edward Rochester", "Bertha Mason"], bookId: 1},
]

const logBookInfo = (title, author, image, summary, characters) => {
        let info = {
            title: title,
            author: author,
            image: image,
            summary: summary,
            character: characters
        }
    
        console.log(info)
}

function BookListContainer(props) {
    return (
        <div className='booklist-container'>
            {bookInfo.map(book => <BookCard key={book.bookId} title={book.title} author={book.author} image={book.image} summary={book.summary} characters={book.characters} logBookInfo={logBookInfo}/>)}
        </div>
    );
}

export default BookListContainer;