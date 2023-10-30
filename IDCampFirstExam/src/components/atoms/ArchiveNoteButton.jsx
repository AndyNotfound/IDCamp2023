import React from 'react';
import { PiArchiveBoxBold } from 'react-icons/pi'

function ArchiveNoteButton({ id, ArchiveNote }) {
    return (
        <button className="note-card__buttons-archive" onClick={() => ArchiveNote(id)}>
            <PiArchiveBoxBold />
        </button>
    )
};

export default ArchiveNoteButton;