import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "./BookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (e) => {
      e.preventDefault();
      const book = {id: numberOfBooks + 1, title, author}
      dispatch(addBooks(book));
      navigate('/show-books', {replace: true});
  }

  return (
    <div>
      <h2>Add Book here</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="title">Author</label>
          <input
            type="text"
            name="title"
            id="title"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
