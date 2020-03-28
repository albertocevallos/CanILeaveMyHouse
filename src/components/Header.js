import React, { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon
  // FacebookShareCount,
  // TwitterShareButton,
  // TwitterIcon
} from "react-share";
import axios from "axios";

const shareUrl = "https://canileavemyhouse.co/";
const shareTitle = "Can I Leave My House?";
const shareToken = "213944296522083|QNMmi-FslfUt4G5MNmKK-AMs1mI";
const counterUrl =
  "https://graph.facebook.com/?id=https://canileavemyhouse.co&fields=engagement&access_token=213944296522083|123a5a55237f53d6966b6d00c69d6d92";

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    axios
      .get(counterUrl)
      .then(response => {
        console.log(response.data.engagement.share_count);
        this.setState({
          counter: response.data.engagement.share_count
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    return (
      <div className="header">
        <div className="header__social">
          <FacebookShareButton
            url={shareUrl}
            quote={shareTitle}
            className="header__social--button"
          >
            <FacebookIcon
              bgStyle={{ fill: "#1877f2" }}
              size={32}
              round={true}
            ></FacebookIcon>
          </FacebookShareButton>
          <div className="header__social--counter">
            {this.state.counter} shares
          </div>
          {/* <TwitterShareButton
            url={shareUrl}
            title={shareTitle}
            className="header__social--button"
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton> */}
        </div>
      </div>
    );
  }
}
