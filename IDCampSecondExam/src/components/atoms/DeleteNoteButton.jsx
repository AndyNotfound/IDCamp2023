import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';

function DeleteNoteButton({id, deleteNote}) {
  return (
    <button
      className="note-card__buttons-delete"
      onClick={() => deleteNote(id)}
    >
      <AiOutlineDelete />
    </button>
  );
};

DeleteNoteButton.propTypes = {
  id: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DeleteNoteButton;
