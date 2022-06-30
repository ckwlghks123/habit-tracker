import React, { Component } from "react";
import Habit from "./Habit";

class Habits extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, habits } = this.props;
    return (
      <ul>
        {habits.map((habit, key) => (
          <Habit
            key={key}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
