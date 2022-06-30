import React from "react";
import { memo } from "react";

const HabitReset = memo(({ onReset, onClear }) => {
  return (
    <footer>
      <button className="habit-reset" onClick={onReset}>
        reset all
      </button>
      <button className="habit-reset" onClick={onClear}>
        Clear All
      </button>
    </footer>
  );
});

export default HabitReset;
