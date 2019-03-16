import React from "react";

const Notice = (props) => {
  return (
    <div className="Notice">
      <h3>
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Want to submit an issue to facebook/react?
      </h3>
      <p>
        If you have a bug or an idea, read the{" "}
        <a href="/">contributing guidelines</a> before oening an
        issue.
      </p>
      <p>
        Issues labeled with{" "}
        <span className="highlight green">good first issue</span>{" "}
        can be good first contributions.
      </p>
    </div>
  );
};

export default Notice;
