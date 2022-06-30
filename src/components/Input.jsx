import React, { useRef } from "react";
import { useCallback } from "react";
import { memo } from "react";

const Input = memo(({ onAdd }) => {
  // const inputRef = React.createRef(); <---- 클래스 컴포넌트일때 createRef 사용
  const inputRef = useRef();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const name = inputRef.current.value;
      name && onAdd(name);
      inputRef.current.value = "";
    },
    [onAdd]
  );

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="습관을입력하세요"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default Input;
