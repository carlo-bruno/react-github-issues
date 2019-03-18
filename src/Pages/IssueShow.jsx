import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
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
          <strong>
            <a href={user.html_url}>{user.login}</a>
          </strong>{" "}
          &nbsp;opened this {date} · {commentSpan}
        </p>
      </header>

      <section className="issue">
        <div className="image-box">
          <a href={user.html_url}>
            <img src={user.avatar_url} alt="user profile" />
          </a>
        </div>
        <div className="issue-content">
          <div className="header">
            <p>
              <strong>
                <a href={user.html_url}>{user.login}</a>
              </strong>{" "}
              commented time ago
            </p>
          </div>
          <div className="issue-body">
            <ReactMarkdown source={body} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IssueShow;
