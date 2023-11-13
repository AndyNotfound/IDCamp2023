import React from 'react';
import PropTypes from 'prop-types';
import {showFormattedDate} from '../../utils';
import NoteCard from '../molecules/NoteCard';
import MasonryLayout from '../molecules/MasonryLayout';

function NoteCardList({header, notes, onDeleteNote, onArchiveNote}) {
  return (
    <>
      <h2 className="note-card-list__header">{header}</h2>
      <div className="note-card-list">
        <MasonryLayout columns={6} gap={20}>
          {notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={showFormattedDate(note.createdAt)}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            );
          })}
        </MasonryLayout>
      </div>
    </>
  );
}

NoteCardList.propTypes = {
  header: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
};

export default NoteCardList;
