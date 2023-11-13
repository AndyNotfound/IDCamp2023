import React from 'react';
import PropTypes from 'prop-types';

function SearchNote({keyword, keywordChange}) {
  return (
    <div className="note-search">
      <input
        type="text"
        className="note-search__input"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        placeholder="Search for notes ..."
      />
    </div>
  );
}

SearchNote.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchNote;
