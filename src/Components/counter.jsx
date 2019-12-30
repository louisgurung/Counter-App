import React, { Component } from "react";

class Counter extends Component {
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
      <div class="row">
        {/* <span style={{ fontSize: 20 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
        <div className="col-1">
          {" "}
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>

        {/* {this.state.tags.length === 0 &&
          "Can print a statement with 'and' if the condition is true"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // renderTags() {
  //   // if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     // <ul>
  //     //   {this.state.tags.map(tag => (
  //     //     <li key={tag}>{tag}</li>
  //     //   ))}
  //     // </ul>
  //   );
  // }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
