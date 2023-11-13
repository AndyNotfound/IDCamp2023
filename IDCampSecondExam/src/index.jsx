/* eslint-disable linebreak-style */
import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './styles/style.css';
import NoteApp from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <NoteApp />
    </BrowserRouter>,
);
