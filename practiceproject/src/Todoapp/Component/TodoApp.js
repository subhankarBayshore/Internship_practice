import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const TodoApp = () => {
  const { control, reset, handleSubmit } = useForm();

  const [taskArray, setTaskArray] = useState([]);

  const taskSubmit = (data) => {
    const newTaskArray = [
      ...taskArray,
      { id: taskArray.length + 1, task: data.task, complete: false },
    ];

    setTaskArray(newTaskArray);

    reset();
  };

  const dataHandler = (id, action) => {
    let updatedTask = taskArray.filter((item) => item.id === id);
    console.log(updatedTask);
    const updatedTaskArray = taskArray.filter((item) => item.id !== id);
    if (action === "del") {
      setTaskArray(updatedTaskArray);
    } else if (action === "com") {
      //console(updatedTask);
      let index = taskArray.findIndex((item) => item.id === id);
      let data = [...taskArray];
      data[index].complete = true;

      setTaskArray([...data]);
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={handleSubmit(taskSubmit)}>
          <label>Task : </label>
          <Controller
            name="task"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="textarea" onChange={onChange} value={value} />
            )}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div>
        <h2>Task List</h2>
      </div>
      {taskArray
        ? taskArray.map((item) => {
            return (
              <div>
                <div
                  style={{
                    textDecoration: item.complete ? "line-through" : "none",
                  }}
                >
                  {item.task}
                </div>
                <button
                  onClick={() => {
                    dataHandler(item.id, "del");
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    dataHandler(item.id, "com");
                  }}
                >
                  Complete
                </button>
              </div>
            );
          })
        : null}
    </>
  );
};

export default TodoApp;
