import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // state = {
  //   count: 0,
  // };

  // handleIncrement = () => {
  //   // this.setState({ count: this.state.count + 1 });
  // };
  // handleDecrease = () => {
  //   // const count = this.state.count - 1;
  //   // this.setState({ count: count < 0 ? 0 : count });
  // };
  // handleDelete = () => {};

  render() {
    const { name, count } = this.props.habit;
    const { onIncrement, onDecrement, onDelete } = this.props;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={() => onIncrement(this.props.habit)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={() => onDecrement(this.props.habit)}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={() => onDelete(this.props.habit)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
