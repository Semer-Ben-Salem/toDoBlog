import React from "react";
import App from "./components/app.jsx";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
