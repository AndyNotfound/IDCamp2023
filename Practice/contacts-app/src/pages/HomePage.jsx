import React from "react";
import '../styles/style.css'
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom';
import { getContacts } from '../data/contact'
import ContactList from "../components/organisms/ContactList";
import SearchBar from "../components/organisms/SearchBar";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: getContacts(),
            keyword: props.defaultKeyword ? props.defaultKeyword : '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts })
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword)
    }

    render() {
        const contacts = this.state.contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(
                this.state.keyword.toLocaleLowerCase()
            )
        })

        return (
            <div className="contact-app">
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h1>Daftar Kontak</h1>
                <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
}

export default HomePageWrapper;