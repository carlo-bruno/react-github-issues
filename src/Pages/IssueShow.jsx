import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { ReactComponent as Open } from "../images/open.svg";

const IssueShow = (props) => {
  let theIssue = props.issues.find((issue) => {
    return issue.number === parseInt(props.match.params.number);
  });

  // title, number, state, created_at, body
  let {
    title,
    number,
    created_at,
    body,
    user,
    comments,
    labels
  } = theIssue;

  let date = moment(created_at).fromNow();
  let commentSpan = `${comments} ${
    comments === 1 ? "Comment" : "Comments"
  }`;

  let labelP = labels.map((label, i) => {
    let bgc = {
      backgroundColor: `#${label.color}`
    };
    return (
      <p key={i} className="issue-label" style={bgc}>
        {" "}
        {label.name}
      </p>
    );
  });

  return (
    <div className="IssueShow">
      <Link to="/issues">&larr; Show All Issues</Link>
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

        <div className="sidebar">
          <h4>Labels</h4>
          {labelP}
        </div>
      </section>
    </div>
  );
};

export default IssueShow;
