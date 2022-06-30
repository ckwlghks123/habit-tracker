import "./app.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Habits from "./components/Habits";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import HabitReset from "./components/HabitReset";

class App extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0 },
      { name: "쓰기", count: 0 },
      { name: "먹기", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    this.setState({
      habits: this.state.habits.map((state) =>
        state.name === habit.name ? { ...state, count: state.count + 1 } : state
      ),
    });
  };
  handleDecrement = (habit) => {
    if (habit.count > 0) {
      this.setState({
        habits: this.state.habits.map((state) =>
          state.name === habit.name
            ? { ...state, count: state.count - 1 }
            : state
        ),
      });
    }
  };
  handleDelete = (habit) => {
    this.setState({
      habits: this.state.habits.filter((state) => state.name !== habit.name),
    });
  };

  AddHabit = (name) => {
    const newHabit = [...this.state.habits, { name, count: 0 }];
    this.setState({
      habits: newHabit,
    });
  };

  handleReset = (state) => {
    const habits = this.state.habits.map((state) =>
      state.count !== 0 ? { ...state, count: 0 } : state
    );
    this.setState({ habits });
  };

  handleClear = () => {
    const habits = [];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Input onAdd={this.AddHabit} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <HabitReset onReset={this.handleReset} onClear={this.handleClear} />
      </>
    );
  }
}

export default App;
