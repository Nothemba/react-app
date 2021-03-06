import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
export class Counter extends Component {
  state = {
    // count: 0,
    tags: [],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <React.Fragment>
        {this.renderTags()}
    </React.Fragment>;
  }
}

export default Counter;
