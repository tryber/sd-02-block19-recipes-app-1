import React from 'react';
import ShareIcon from '../images/share.png';

const ShareButton = () => (
  <button
    className="icon-button"
    type="button"
  >
    <img
      className="icons"
      src={ShareIcon}
      alt="share icon"
      data-testid="share-btn"
    />
  </button>
);

export default ShareButton;
