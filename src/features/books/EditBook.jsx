import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
    
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({id, title, author}));
    navigate('/show-books', {replace: true})
  };
        
  return (
    <div>
      <h2>Edit Book Here</h2>
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
        <button type="submit">Update book</button>
      </form>
    </div>
  );
};

export default EditBook;
