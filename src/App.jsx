import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Notice from "./Components/Notice";
import LandingPage from "./Pages/LandingPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Notice />

          <LandingPage />
        </main>
      </div>
    );
  }
}

export default App;
