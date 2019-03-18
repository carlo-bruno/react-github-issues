import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { ReactComponent as Comment } from "../images/comment.svg";
import { ReactComponent as Open } from "../images/open.svg";

const IssueCard = (props) => {
  // title, number, state, created_at, user.login, labels[], comments int
  let {
    title,
    number,
    created_at,
    user,
    labels,
    comments
  } = props.issue;

  // loop through labes, add class
  let labelSpan = labels.map((label, i) => {
    let bgc = {
      backgroundColor: `#${label.color}`
    };
    return (
      <span key={i} className="issue-label" style={bgc}>
        {" "}
        {label.name}
      </span>
    );
  });

  // show number of comments
  let commentDiv =
    comments !== 0 ? (
      <div className="comment-box">
        <Comment />
        <span>{comments}</span>
      </div>
    ) : null;

  // show date, use moment
  let date = moment(created_at).fromNow();

  return (
    <div className="IssueCard">
      <div className="state-box">
        <Open />
      </div>
      <div className="card-info">
        <div>
          <Link to={`/issues/${number}`}>
            <h3>{title}</h3>
          </Link>
          {labelSpan}
        </div>
        <p className="info-text">
          <span>#{number}</span> opened {date} by{" "}
          <strong>{user.login}</strong>
        </p>
      </div>

      {commentDiv}
    </div>
  );
};

export default IssueCard;
