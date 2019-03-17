import React from "react";
import IssueCard from "../Components/IssueCard";
import { ReactComponent as Open } from "../images/open.svg";

const IssuesPage = (props) => {
  let cards = props.issues.map((issue, i) => (
    <IssueCard key={i} issue={issue} />
  ));
  // loop through issues here
  return (
    <div className="IssuesPage">
      <header>
        <h3>
          <Open />
          <span>{props.issues.length}</span>
          &nbsp;Open Issues
        </h3>
      </header>
      {cards}
    </div>
  );
};

export default IssuesPage;
