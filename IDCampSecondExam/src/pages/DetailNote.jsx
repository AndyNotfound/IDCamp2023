import React from 'react';
import parse from 'html-react-parser';
import {IoIosArrowRoundBack} from 'react-icons/io';
import {Link, useParams} from 'react-router-dom';
import {archiveNote, getNotes, showFormattedDate} from '../utils';
import ArchiveNoteButton from '../components/atoms/ArchiveNoteButton';
import NotFoundPage from './NotFound';

function DetailNotePage() {
  const {id} = useParams();
  const note = getNotes().find((note) => note.id == id);

  if (note == undefined || note == null) {
    return (
      <NotFoundPage errorMsg='The note you are looking for does not exist' />
    );
  } else {
    return (
      <div className="note-detail">
        <div className="note-detail__navigation">
          <Link to="/" className="note-detail__navigation-back">
            <IoIosArrowRoundBack
              className="note-detail__navigation-back__icon"
            />
            <span>Back to home</span>
          </Link>
          <ArchiveNoteButton id={note.id} archiveNote={archiveNote} />
        </div>
        <h2 className="note-detail__header">
          {note.title}
        </h2>
        <p className="note-detail__date">
          Last updated at {showFormattedDate(note.createdAt)}
        </p>
        <div className="note-detail__body">
          {parse(note.body)}
        </div>
      </div>
    );
  }
}

export default DetailNotePage;
