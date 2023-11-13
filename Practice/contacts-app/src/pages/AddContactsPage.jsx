import { addContact } from '../data/contact'
import '../styles/style.css'
import ContactInput from "../components/organisms/ContactInput";
import { useParams } from 'react-router-dom';

function AddContactPage() {
    const navigate = useParams();

    function onAddContactHandler(contact) {
        addContact(contact)
        navigate('/')
    }

    return (
        <section>
            <h2>Tambah Kontak</h2>
            <ContactInput addContact={onAddContactHandler} />
        </section>
    )
}

export default AddContactPage;