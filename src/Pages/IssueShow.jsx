import React from "react";
import moment from "moment";
import { ReactComponent as Open } from "../images/open.svg";

const IssueShow = (props) => {
  // title, number, state, created_at, body
  let {
    title,
    number,
    created_at,
    body,
    user,
    comments
  } = props.issue;

  let date = moment(created_at).fromNow();
  let commentSpan = `${comments} ${
    comments === 1 ? "Comment" : "Comments"
  }`;

  return (
    <div className="IssueShow">
      <header>
        <h1>
          {title} <span className="issue-number">#{number}</span>
        </h1>

        <p>
          <span className="state">
            <Open />
            Open
          </span>
          <strong>{user.login}</strong> &nbsp;opened this {date} ·{" "}
          {commentSpan}
        </p>
      </header>

      <section className="issue">
        <div className="image-box">
          <img src={user.avatar_url} alt="user profile" />
        </div>
        <div className="issue-content">
          <div className="header">
            <p>
              <strong>{user.login}</strong> commented time ago
            </p>
          </div>
          <div className="issue-body">{body}</div>
        </div>
      </section>
    </div>
  );
};

export default IssueShow;
