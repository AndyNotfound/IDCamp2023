import React from "react";
import { TfiSearch } from 'react-icons/tfi'

function SearchNoteButton({ params, searchNote }) {
    return (
        <button className="note-search__button" onClick={() => { searchNote(params) }}>
            <TfiSearch />
        </button>
    )
}

export default SearchNoteButton;