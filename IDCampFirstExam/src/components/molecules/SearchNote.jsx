import React from "react";
import SearchNoteButton from "../atoms/SearchNoteButton";

class SearchNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: '',
        }
    }

    onParamsChange = (event) => {
        this.setState({
            params: event.target.value
        });
        // this.props.searchNote(this.state.params)
    }

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    className="note-search__input"
                    value={this.state.params}
                    onChange={this.onParamsChange}
                    placeholder="Search for notes ..."
                />
                <SearchNoteButton
                    searchNote={this.props.searchNote}
                    params={this.state.params}
                />
            </div>
        )
    }
}

export default SearchNote;