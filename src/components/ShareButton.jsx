import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import propTypes from 'prop-types';
import ShareIcon from '../images/share.png';

const ShareButton = ({ url }) => (
  <CopyToClipboard
    text={url}
    onCopy={() => { alert(`Você copiou a URL ${url}`); }}
  >
    <button className="icon-button" type="button">
      <img
        className="icons"
        src={ShareIcon}
        alt="share icon"
        data-testid="share-btn"
      />
    </button>
  </CopyToClipboard>
);

ShareButton.propTypes = {
  url: propTypes.string.isRequired,
};

export default ShareButton;
