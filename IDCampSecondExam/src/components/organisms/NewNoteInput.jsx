import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlinePlus} from 'react-icons/ai';

class NewNoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditableRef = React.createRef();
    this.state = {
      title: '',
      body: '',
      titleMax: false,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const title = event.target.value;
    if (title.length <= 50) {
      this.setState({title, titleMax: false});
    } else {
      // eslint-disable-next-line max-len
      // Because I can't use maxLength so this will be a way to go around disabling the input
      event.target.blur();
      this.setState({title: title.slice(0, 50), titleMax: true});
    }
  }

  onSubmitHandler(event) {
    event.preventDefault();

    // I need to make this func to prevent disabling max-line
    function isNotEmpty(value) {
      return value.trim().length !== 0;
    }

    if (!isNotEmpty(this.state.title) && !isNotEmpty(this.state.body)) {
      alert('The Notes can not be empty');
    } else if (!isNotEmpty(this.state.title)) {
      alert('The Note\'s title can not be empty');
    } else if (!isNotEmpty(this.state.body)) {
      alert('The Note\'s description can not be empty');
    } else {
      this.props.addNote(this.state);
    }
    this.setState(() => {
      return {
        title: '',
        body: '',
        titleMax: false,
      };
    });
    if (this.contentEditableRef.current) {
      this.contentEditableRef.current.innerHTML = '';
    }
  }

  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="note-input">
        <input
          type="text"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          className="note-input__title"
          placeholder="What's on your mind?"
        />
        <p
          className="note-input__max"
          style={{color: this.state.titleMax ? '#DF2935' : '#e5e6e8'}}
        >
          {`${this.state.title.length}/50`}
        </p>
        <div
          className="note-input__body"
          contentEditable ="true"
          data-placeholder="Take a note ..."
          onInput={this.onInputHandler}
          ref={this.contentEditableRef}
        />
        <button type="submit" className="note-input__submit">
          <p className="note-input__submit-text">Add Note</p>
          <AiOutlinePlus />
        </button>
      </form>
    );
  }
}

NewNoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NewNoteInput;
