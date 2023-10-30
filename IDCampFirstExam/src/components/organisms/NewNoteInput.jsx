import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'

class NewNoteInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            titleMax: false,
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        const title = event.target.value;
        if (title.length <= 50) {
            this.setState({ title, titleMax: false });
        } else {
            // Because I can't use maxLength so this will be a way to go around disabling the input
            event.target.blur();
            this.setState({ title: title.slice(0, 50), titleMax: true });
        }
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
                titleMax: false,
            }
        })
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
                    style={{ color: this.state.titleMax ? '#DF2935' : '#e5e6e8' }}
                >
                    {`${this.state.title.length}/50`}
                </p>
                <textarea
                    type="text"
                    value={this.state.body}
                    onChange={this.onBodyChangeHandler}
                    className="note-input__body"
                    placeholder="Take a note ..."
                />
                <button type="submit" className="note-input__submit">
                    <p className="note-input__submit-text">Add Note</p>
                    <AiOutlinePlus />
                </button>
            </form>
        )
    }
}

export default NewNoteInput;