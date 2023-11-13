import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function NotFoundPage({errorMsg = 'The thing you are looking for is missing'}) {
  return (
    <>
      <div className="notfound">
        <img src="/404.webp" className="notfound__illustration" alt="" />
      </div>
      <div className="notfound__desc">
        <h1 className="notfound__desc-header">
          {errorMsg}
        </h1>
        <Link className="notfound__desc-button" to="/">Go back home</Link>
      </div>
    </>
  );
}

NotFoundPage.propTypes = {
  errorMsg: PropTypes.string,
};

export default NotFoundPage;
