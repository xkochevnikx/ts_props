import React, { FC, useRef, useState } from "react";

const Events: FC = () => {
  const [value, setValue] = useState<string>("");

  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(inputRef.current?.value);
  }

  function dragHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log("DRAG");
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(false);
  }

  function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(false);
  }

  function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(true);
  }
  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="управляемый"
      />
      <input ref={inputRef} type="text" placeholder="неуправляемый" />
      <button onClick={clickHandler}>button</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: "blue",
          marginTop: 20,
          backgroundColor: isDrag ? "orangered" : "blue",
        }}></div>
    </div>
  );
};

export default Events;
