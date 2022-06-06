import { createSlice } from "@reduxjs/toolkit";

const booksData = {
  books: [
    { id: 1, title: "Life is very easy", author: "Mashaed Hasan Simanto" },
    { id: 2, title: "Never stop learning", author: "Ayman Sadik" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: booksData,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    }, 
    updateBook: (state, action) => {
        const {id, title, author} = action.payload;
        const isBookExits = state.books.filter(book => book.id === id);
        if(isBookExits){
            isBookExits[0].title = title
            isBookExits[0].author = author
        }
    }, 
    deleteBook: (state, action) => {
       const id = action.payload;
       state.books = state.books.filter(book => book.id !== id)
    }, 
     
  },
});

export const { showBooks, addBooks, updateBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
