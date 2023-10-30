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
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    id: PropTypes.number,
    onDelete: PropTypes.func
}

export default ContactItem;