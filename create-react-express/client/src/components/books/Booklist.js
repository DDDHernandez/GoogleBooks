import React from 'react';
import BookCard from './BookCard'

const Booklist = (props) => {
    return (
        <div className="row">
        <div className="card-group">
            {
                props.Books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        averageRating={book.volumeInfo.averageRating}
                        maturityRating={book.volumeInfo.maturityRating}
                        description={book.volumeInfo.description}
                        buyLink={book.saleInfo.buyLink}
                    />
                })
            }


        </div>
        </div>
        
    )}

export default Booklist;