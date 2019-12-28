import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };

  //in state can write ->imgUrl: "https://picsum.photos/500"
  render() {
    return (
      <div>
        {/* <span style={{ fontSize: 20 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>

        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.state.tags.length === 0 &&
          "Can print a statement with 'and' if the condition is true"}
        {this.renderTags()}
      </div>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
