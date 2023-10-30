import React from 'react';
import DeleteNoteButton from "../atoms/DeleteNoteButton";
import ArchiveNoteButton from "../atoms/ArchiveNoteButton";

function NoteCard({ id, title, body, createdAt, onDeleteNote, onArchiveNote }) {
    return (
        <div className="note-card">
            <h4 className="note-card__title">
                {title}
            </h4>
            <p className="note-card__timestamp">
                {createdAt}
            </p>
            <p className="note-card__body">
                {body}
            </p>
            <div className="note-card__buttons">
                <DeleteNoteButton DeleteNote={onDeleteNote} id={id} />
                <ArchiveNoteButton ArchiveNote={onArchiveNote} id={id} />
            </div>
        </div>
    )
}

export default NoteCard;