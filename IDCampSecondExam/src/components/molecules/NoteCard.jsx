import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import DeleteNoteButton from '../atoms/DeleteNoteButton';
import ArchiveNoteButton from '../atoms/ArchiveNoteButton';

function NoteCard({id, title, body, createdAt, onDeleteNote, onArchiveNote}) {
  return (
    <div className="note-card">
      <h4 className="note-card__title">
        <Link to={`notes/${id}`}>
          {title}
        </Link>
      </h4>
      <p className="note-card__timestamp">
        {createdAt}
      </p>
      <p className="note-card__body">
        {parse(body)}
      </p>
      <div className="note-card__buttons">
        <DeleteNoteButton deleteNote={onDeleteNote} id={id} />
        <ArchiveNoteButton archiveNote={onArchiveNote} id={id} />
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
};

export default NoteCard;
