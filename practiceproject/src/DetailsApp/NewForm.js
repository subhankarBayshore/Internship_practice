import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const NewForm = () => {
  const [allDetails, setAllDetails] = useState([
    {
      name: "",
      email: "",
      phone: "",
      address: "",
      skills: [],
    },
  ]);

  const [inputFields, setInputFields] = useState([
    { id: "", skill: "", skilllevel: "" },
  ]);

  const { control, handleSubmit } = useForm();

  const inputChangeHandler = (e, index) => {
    console.log("i: ", index);
    console.log("e :", e);
    const data = [...inputFields];
    data[index][e.target.name] = e.target.value;

    setInputFields(data);
  };

  const addFieldHandler = () => {
    const data = [...inputFields];
    const newField = { id: data.length, skill: "", skilllevel: "" };
    data.push(newField);
    setInputFields(data);
    // setInputFields((prev) => {
    //   return {
    //     ...prev,
    //     newField,
    //   };
    // });
  };

  const removeFieldHandler = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields([...data]);
  };

  //   const submit = (e) => {
  //     e.preventDefault();
  //     console.log(inputFields);
  //   };

  const submitDetails = (data) => {
    setAllDetails({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      skills: inputFields,
    });
  };

  useEffect(() => {
    console.log(allDetails);
  }, [allDetails]);

  return (
    <div>
      <form onSubmit={handleSubmit(submitDetails)}>
        <div>
          <label>Name : </label>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" onChange={onChange} value={value} />
            )}
          />
        </div>
        <div>
          <label>Email : </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="email" onChange={onChange} value={value} />
            )}
          />
        </div>
        <div>
          <label>Phone : </label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="number" onChange={onChange} value={value} />
            )}
          />
        </div>
        <div>
          <label>Address : </label>
          <Controller
            name="address"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="textarea" onChange={onChange} value={value} />
            )}
          />
        </div>
        <h3>Skill</h3>

        {inputFields &&
          inputFields.map((input, index) => {
            console.log("input : " + input);
            console.log("index : " + index);
            return (
              <div key={input.id}>
                <input
                  name="skill"
                  placeholder=""
                  value={input.name}
                  onChange={(e) => inputChangeHandler(e, index)}
                />
                <select //reactSelect
                  name="skilllevel"
                  onChange={(e) => inputChangeHandler(e, index)}
                >
                  <option value="">----Select----</option>
                  <option value="begenner">Begenner</option>
                  <option value="intermidiate">Intermediate</option>
                  <option value="pro">Pro</option>
                </select>
                <button type="button" onClick={() => removeFieldHandler(index)}>
                  remove
                </button>
              </div>
            );
          })}
        <button type="button" onClick={addFieldHandler}>
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;
