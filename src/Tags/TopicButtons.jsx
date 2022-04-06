import React from "react";
import { Link } from "react-router-dom";
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../App.css";

export default function TopicButtons({ setTopicFilter }) {
  return (
    <div id="topicButtons">
      <Link to="/">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          All
        </AwesomeButton>
      </Link>
      <Link to="topics/coding">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          Coding
        </AwesomeButton>
      </Link>
      <Link to="topics/cooking">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          Cooking
        </AwesomeButton>
      </Link>
      <Link to="topics/football">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          Football
        </AwesomeButton>
      </Link>
      <AwesomeButtonSocial
        type="external"
        target="_blank"
        href="https://www.facebook.com/northcoders/"
        type="facebook"
        size="medium"
        style={{ margin: 2 }}
      >
        Facebook
      </AwesomeButtonSocial>
      <AwesomeButtonSocial
        type="external"
        target="_blank"
        href="https://twitter.com/northcoders"
        type="twitter"
        size="medium"
        style={{ margin: 2 }}
      >
        Twitter
      </AwesomeButtonSocial>
      <AwesomeButtonSocial
        type="external"
        target="_blank"
        href="https://www.instagram.com/northcoders/"
        type="instagram"
        size="medium"
        style={{ margin: 2 }}
      >
        Instagram
      </AwesomeButtonSocial>
    </div>
  );
}
