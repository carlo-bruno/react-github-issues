import React, { Component } from "react";
import { BrowserRouter as BR, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Notice from "./Components/Notice";
import LandingPage from "./Pages/LandingPage";
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
      this.setState({ issues: response.data });
    });
  }

  render() {
    return (
      <BR>
        <div>
          <Header />
          <main>
            <Notice />

            <Route exact path="/" component={LandingPage} />
            {/* <LandingPage /> */}
            <Route
              exact
              path="/issues"
              render={() => (
                <IssuesPage issues={this.state.issues} />
              )}
            />
            <Route
              path="/issues/:number"
              render={(props) => (
                <IssueShow issues={this.state.issues} {...props} />
              )}
            />
            {/* {this.state.issues.length > 0 ? (
              <IssueShow issue={this.state.issues[9]} />
            ) : null} */}
          </main>
        </div>
      </BR>
    );
  }
}

export default App;
