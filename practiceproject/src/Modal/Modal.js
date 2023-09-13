import React from "react";
import classes from "./Modal.module.css";
import { useForm, Controller } from "react-hook-form";

const Modal = ({ setModalState, addNewValue }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.inputvalue !== undefined) {
      addNewValue(data.inputvalue);
      setModalState(false);
    }
    return;
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <header className={classes.header}>
            <h1>Please give the name</h1>
          </header>
          <body className={classes.content}>
            <Controller
              name="inputvalue"
              control={control}
              rules={{}}
              render={({ field: { onChange, value } }) => (
                <input type="text" value={value} onChange={onChange} />
              )}
            />
          </body>
          <footer className={classes.actions}>
            <button
              onClick={() => {
                addNewValue(null);
                setModalState(false);
              }}
            >
              <h3>Close</h3>
            </button>
            <button type="submit">
              <h3>Submit</h3>
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Modal;
