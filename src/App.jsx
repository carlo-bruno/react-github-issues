import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Notice from "./Components/Notice";
// import LandingPage from "./Pages/LandingPage";
import IssuesPage from "./Pages/IssuesPage";
import IssueShow from "./Pages/IssueShow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    const url = `https://api.github.com/repos/facebook/react/issues?page=1&per_page=100`;

    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({ issues: response.data });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Notice />

          {/* <LandingPage /> */}
          {/* <IssuesPage issues={this.state.issues} /> */}
          {this.state.issues.length > 0 ? (
            <IssueShow issue={this.state.issues[3]} />
          ) : null}
        </main>
      </div>
    );
  }
}

export default App;
