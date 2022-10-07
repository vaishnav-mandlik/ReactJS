import { useState, useEffect } from "react";
import "./App.css";
import ShowTodos from "./Components/ShowTodos";
export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [toUpData, setToUpData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const getSingleData = (id) => {
    return fetch(`http://localhost:3001/todos?id=${id}`).then((res) => {
      return res.json();
      // console.log(toUpData, "res");
    });
  };
  const getData = (page) => {
    return fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`).then(
      (res) => {
        return res.json();
      }
    );
  };

  const showData = () => {
    try {
      setLoading(true);
      getData(page).then((res) => {
        setTodos(res);
      });
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    showData();
  }, [page]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClickHandle = (text) => {
    let data = {
      task: text,
      status: false,
    };

    fetch(`http://localhost:3001/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  const completed = (id) => {
    getSingleData(id).then((res) => {
      console.log(res[0], "res");
      let data = { task: res[0].task, status: !res[0].status };

      fetch(`http://localhost:3001/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      showData();
    });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });
    showData();
  };
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>error... plese refresh page</>;
  }
  return (
    <div className="App items-center w-full content-center justify-center">
      <div className="border-[3px] bg-[#cbccca] mt-[10px] p-[50px]">
        <h2 className="text-[30px] font-bold">Todo App</h2>
        <input
          className="p-1 border-2 rounded-xl px-4 mt-2 "
          placeholder="Enter Task"
          value={text}
          onChange={handleChange}
        ></input>
        <br />
        <button
          className="p-[8px] px-[40px] mt-[20px] bg-[#fff] border-2 rounded-lg hover:bg-sky-700"
          onClick={() => onClickHandle(text)}
        >
          Add to List
        </button>
        <div className="w-[250px]   mt-5 content-center">
          <ShowTodos
            list={todos}
            completed={completed}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <p className="text-[red] mr-2">Not Completed</p>
        <p className="text-[green]">Completed</p>
      </div>
      <div className="flex ">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
          className="mr-5 border-2 px-5"
        >
          Prev
        </button>
        <p>{page}</p>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="ml-5 border-2 px-5"
        >
          Next
        </button>
      </div>
    </div>
  );
}
