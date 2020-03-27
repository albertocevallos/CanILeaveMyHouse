import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount
} from "react-share";

const shareUrl = "http://covidimpact.ca/";
const title = "Can I Leave My House ?";

function Header() {
  return (
    <div className="header">
      <div className="header__social">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon
            bgStyle={{ fill: "#1877f2" }}
            size={32}
            round={true}
          ></FacebookIcon>
        </FacebookShareButton>
        <div>
          <FacebookShareCount
            url={shareUrl}
            className="header__social--counter"
          >
            {shareCount => <span>{shareCount}</span>}
          </FacebookShareCount>
        </div>
      </div>
    </div>
  );
}

export default Header;
