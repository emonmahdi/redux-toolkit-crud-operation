import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import BookView from '../features/books/BookView';
import EditBook from '../features/books/EditBook';
import Error from '../Layouts/Error';
import Home from '../Layouts/Home';
import Navbar from '../Layouts/Navbar';

const Index = () => {
    return (
        <div>
            <h1 className='header'>Redux Toolkit Crud Operation</h1>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/show-books' element={<BookView />} />
                    <Route path='/add-book' element={<AddBook />} />
                    <Route path='/edit-book' element={<EditBook />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;