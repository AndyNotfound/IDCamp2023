import React from 'react';
import NewNoteInput from '../components/organisms/NewNoteInput';
import {addNote} from '../utils';

function NewNotesPage() {
  function onAddNote(note) {
    addNote(note);
  }
  return (
    <NewNoteInput addNote={onAddNote} />
  );
}
export default NewNotesPage;
