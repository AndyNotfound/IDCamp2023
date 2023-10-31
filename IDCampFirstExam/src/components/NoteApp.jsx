import React from 'react'
import NoteCardList from "./organisms/NoteCardList";
import { getInitialData, searchRelevance } from "../utils";
import SearchNote from './molecules/SearchNote';
import NewNoteInput from './organisms/NewNoteInput';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchResult: [],
            isSearching: false,
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
    }

    onDeleteNoteHandler(id) {
        const updatedNotes = this.state.notes.filter(note => note.id !== id);
        const updatedSearchResult = this.state.searchResult.filter(note => note.id !== id);

        this.setState({
            notes: updatedNotes,
            searchResult: updatedSearchResult,
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: Date.now().toString(36) + Math.random().toString(36),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onArchiveNoteHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map(note => {
                if (note.id === id) {
                    return { ...note, archived: !note.archived };
                }
                return note;
            });

            return {
                notes: updatedNotes,
            }
        });
    }


    onSearchNoteHandler(params) {
        if (!params.length <= 0) {
            const filteredNotes = this.state.notes.filter(note => {
                return note.title.includes(params);
            });

            const sortedNotes = filteredNotes.sort((a, b) => {
                return searchRelevance(a.title, params) - searchRelevance(b.title, params);
            });

            this.setState(() => {
                return {
                    searchResult: sortedNotes
                }
            })
        }

    }

    render() {
        return (
            <>
                <NewNoteInput addNote={this.onAddNoteHandler} />
                <SearchNote searchNote={this.onSearchNoteHandler} />
                {!this.state.searchResult.length <= 0 ?
                    <NoteCardList
                        header={"Search Results"}
                        notes={this.state.searchResult}
                        onDeleteNote={this.onDeleteNoteHandler}
                        onArchiveNote={this.onArchiveNoteHandler}
                    /> :
                    ""
                }
                {!this.state.notes.length <= 0 ?
                    <NoteCardList
                        header={"Notes"}
                        notes={this.state.notes.filter(note => note.archived !== true)}
                        onDeleteNote={this.onDeleteNoteHandler}
                        onArchiveNote={this.onArchiveNoteHandler}
                    /> :
                    <p className="note-card-list__empty">There's no notes at the moment, you can make one now!</p>
                }
                {!this.state.notes.filter(note => note.archived === true).length <= 0 ?
                    <NoteCardList
                        header={"Archived Notes"}
                        notes={this.state.notes.filter(note => note.archived === true)}
                        onDeleteNote={this.onDeleteNoteHandler}
                        onArchiveNote={this.onArchiveNoteHandler}
                    /> : ""
                }

            </>
        )
    }


}

export default NoteApp