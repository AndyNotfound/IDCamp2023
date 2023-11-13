import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/organisms/Navigation';
import HomePageWrapper from './pages/Home';
import NewNotesPage from './pages/NewNotes';
import DetailNotePage from './pages/DetailNote';
import NotFoundPage from './pages/NotFound';

function NoteApp() {
  return (
    <div className="note-app">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePageWrapper />} />
          <Route path="/notes/new" element={<NewNotesPage />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
