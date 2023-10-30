import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai'

function DeleteNoteButton({ id, DeleteNote }) {
    return (
        <button className="note-card__buttons-delete" onClick={() => DeleteNote(id)}>
            <AiOutlineDelete />
        </button>
    )
};

export default DeleteNoteButton;