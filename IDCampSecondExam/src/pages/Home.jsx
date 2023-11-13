import React from 'react';
import PropTypes from 'prop-types';
import {useSearchParams} from 'react-router-dom';
import {getNotes, searchRelevance} from '../utils';
import NoteCardList from '../components/organisms/NoteCardList';
import SearchNote from '../components/molecules/SearchNote';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
        keyword ? setSearchParams({keyword}) : setSearchParams();
  }

  return (
    <HomePage
      defaultKeyword={keyword || ''}
      onKeywordChange={changeSearchParams}
    />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(),
      keyword: props.defaultKeyword,
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.onKeywordChange(keyword);
  }

  onDeleteNoteHandler(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);

    this.setState({
      notes: updatedNotes,
    });
  }

  onArchiveNoteHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return {...note, archived: !note.archived};
        }
        return note;
      });

      return {
        notes: updatedNotes,
      };
    });
  }

  render() {
    const notes = !this.state.keyword.length == 0 ? (
        this.state.notes.filter((note) => {
          return note.title.toLowerCase().includes(
              this.state.keyword.toLocaleLowerCase(),
          );
        }).sort((a, b) => {
          return (
            searchRelevance(a.title, this.state.keyword) -
        searchRelevance(b.title, this.state.keyword)
          );
        })
    ) : {};

    return (
      <>
        <SearchNote
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />

        {this.state.keyword.length === 0 ? null : (
            <>
              {notes.length === 0 ? (
                    <p className="note-card-list__empty">
                        Nothing matched!
                    </p>
                ) : (
                    <NoteCardList
                      header="Search Results"
                      notes={notes}
                      onDeleteNote={this.onDeleteNoteHandler}
                      onArchiveNote={this.onArchiveNoteHandler}
                    />
                )}
            </>
        )}

        {this.state.notes.length === 0 ? (
            <p className="note-card-list__empty">
              {/* eslint-disable-next-line max-len */}
                There is no notes at the moment, you can make one now!
            </p>
        ) : (
            <NoteCardList
              header="Notes"
              notes={this.state.notes.filter((note) => note.archived !== true)}
              onDeleteNote={this.onDeleteNoteHandler}
              onArchiveNote={this.onArchiveNoteHandler}
            />
        )}

        {this.state.notes.filter((note) =>
          note.archived === true).length === 0 ? null : (
            <NoteCardList
              header="Archived Notes"
              notes={this.state.notes.filter((note) => note.archived === true)}
              onDeleteNote={this.onDeleteNoteHandler}
              onArchiveNote={this.onArchiveNoteHandler}
            />
        )}
      </>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
