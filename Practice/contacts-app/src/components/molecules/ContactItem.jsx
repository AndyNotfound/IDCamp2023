import PropTypes from 'prop-types';
import ContactItemImage from "../atoms/ContactItemImage"
import ContactItemBody from "../atoms/ContactItemBody"
import DeleteButton from '../atoms/DeleteButton';

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

ContactItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactItem;