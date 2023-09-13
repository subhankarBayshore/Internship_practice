import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Modal from "../Modal/Modal";

const DropDown = () => {
  const [food, setfood] = useState([
    { value: "apple", label: "Apple" },
    { value: "mango", label: "Mango" },
    { value: "banana", label: "Banana" },
  ]);

  useEffect(() => {
    const newFood = [...food];
    newFood.unshift({ value: "addNewItem", label: "Add Item" });
    setfood(newFood);
  }, []);

  const [modalState, setModalState] = useState(false);
  //const [dropdownValue, setDropdownValue] = useState();

  const { control, handleSubmit, setValue, reset, getValues } = useForm();

  const addNewValue = (value) => {
    const newValue = { value: value, label: value };
    if (newValue.value === null) {
      reset();
    } else {
      setfood([...food, newValue]);
      setValue("select", newValue);
    }
  };

  const modalHandler = (e) => {
    setModalState(true);
  };

  //   const dropdownHandler = (value) => {
  //     setDropdownValue(value.label);
  //     reset();
  //   };

  const onSubmit = (data) => {
    // if (dropdownValue) {
    //   setValue("showvalue", dropdownValue);
    // }
    //console.log(data);
    // setValue("showvalue", data.select[0].value);

    //console.log(getValues("select").value);
    //console.log(getValues().select.value);
    if (data.value !== undefined)
      setValue("showvalue", getValues().select.value);

    return;
  };

  return (
    <div>
      {modalState && (
        <Modal setModalState={setModalState} addNewValue={addNewValue} />
      )}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>ShowValue</label>
            <Controller
              name="showvalue"
              control={control}
              rules={{}}
              render={({ field: { onChange, value } }) => (
                <input type="text" value={value} onChange={onChange} />
              )}
            />
          </div>
          <div>
            <Controller
              name="select"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  isMulti={false}
                  options={food}
                  onChange={(value) => {
                    //console.log(value);
                    if (value.value === "addNewItem") {
                      modalHandler();
                      return;
                    }

                    onChange(value);
                  }}
                  value={value}
                />
              )}
            />
          </div>
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DropDown;
