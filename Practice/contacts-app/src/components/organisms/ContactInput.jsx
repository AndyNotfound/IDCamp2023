import React from "react"
import PropTypes from 'prop-types';

class ContactInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            tag: ''
        }

        this.onNameChangeHandler = this.onNameChangeHandler.bind(this)
        this.onTagChangeHandler = this.onTagChangeHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }

    onTagChangeHandler(event) {
        this.setState(() => {
            return {
                tag: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler} className="contact-input">
                <input type="text" placeholder="Nama" onChange={this.onNameChangeHandler} value={this.state.name} />
                <input type="text" placeholder="Tag" onChange={this.onTagChangeHandler} value={this.state.tag} />
                <button type="submit">Add</button>
            </form>
        )
    }
}

ContactInput.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default ContactInput