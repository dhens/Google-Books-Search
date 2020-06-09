import React from "react";
import "./style.css";
import BookCard from "../BookCard/BookCard.js"

const BookList = (props) => {
    return(
        <div className="container mt-4">
            <div className="row justify-content-center">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                published={book.volumeInfo.publishedDate}
                                link={book.volumeInfo.infoLink}
                                />
                })
            }
        </div></div>
    )
}

export default BookList;