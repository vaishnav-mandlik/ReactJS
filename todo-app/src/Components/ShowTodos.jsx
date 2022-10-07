import { useState } from "react";
export default function ShowTodos({ list, completed, handleDelete }) {
  // const [bgColor, setBgColor] = useState(list.status);

  const sylteRed = {
    backgroundColor: "red",
  };
  const syltegrn = {
    backgroundColor: "green",
  };
  let TodoData = list.map(({ task, status, id }) => (
    <div className="flex flex-row border justify-between">
      <p
        key={Math.random()}
        id={Math.random()}
        onClick={() => completed(id)}
        style={status ? syltegrn : sylteRed}
        className="w-full border mt-1 p-1 rounded-xl hover:cursor-pointer "
      >
        {task}-{status ? "Completed" : "Not Conpleted"}
      </p>
      <button
        onClick={() => handleDelete(id)}
        className="border px-2 ml-1 bg-[white] rounded-xl"
      >
        Delete
      </button>
    </div>
  ));
  return TodoData;
}
