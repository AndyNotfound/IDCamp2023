import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
    return <button className="contact-item__delete" onClick={() => onDelete(id)}>
        X
    </button>
}

DeleteButton.propTypes = {
    id: PropTypes.number,
    onDelete: PropTypes.func
}

export default DeleteButton;