import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlinePlus} from 'react-icons/ai';


function Navigation() {
  return (
    <div className="navbar">
      <h1 className='navbar__header'>
        <Link to="/">Kept</Link>
      </h1>
      <Link className="navbar__add-note" to="/notes/new">
        <p className="navbar__add-note-text">Add New Note</p>
        <AiOutlinePlus />
      </Link>
    </div>
  );
}

export default Navigation;
