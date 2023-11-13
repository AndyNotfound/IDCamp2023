import React from 'react';
import PropTypes from 'prop-types';
import {PiArchiveBoxBold} from 'react-icons/pi';

function ArchiveNoteButton({id, archiveNote}) {
  return (
    <button
      className="note-card__buttons-archive"
      onClick={() => archiveNote(id)}
    >
      <PiArchiveBoxBold />
    </button>
  );
};

ArchiveNoteButton.propTypes = {
  id: PropTypes.number.isRequired,
  archiveNote: PropTypes.func.isRequired,
};

export default ArchiveNoteButton;
