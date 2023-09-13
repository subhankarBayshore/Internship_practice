import { useState, useEffect } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "react-select";

const ModifiedNewForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const {
    append: append1,
    remove: remove1,
    fields: fields1,
  } = useFieldArray({
    name: "certificate",
    control,
  });
  const {
    append: append2,
    remove: remove2,
    fields: fields2,
  } = useFieldArray({
    name: "address",
    control,
  });

  const [newForm, setNewForm] = useState({});

  const city = [
    { value: "kolkata", label: "Kolkata" },
    { value: "howrah", label: "Howrah" },
    { value: "hooghly", label: "hooghly" },
  ];
  const state = [
    { value: "westbengal", label: "West Bengal" },
    { value: "assam", label: "Assam" },
    { value: "bihar", label: "Bihar" },
  ];
  // useEffect(() => {
  //   console.log(errors);
  // }, [errors]);
  // const onAddCirtificateHandler = () => {
  //   const data = [...cirtificate];
  //   const newField = {
  //     id: data.length,
  //     cirtificate_name: "",
  //     cirtificate_id: "",
  //   };

  //   data.push(newField);
  //   console.log(newField);
  //   setCirtificate(data);
  // };

  // const onDeleteCirtificateHandler = () => {
  //   const data = [...cirtificate];
  //   if (data.length > 1) {
  //     data.pop();
  //     setCirtificate(data);
  //   }
  // };

  // const cirtificateInputHandler = (e, index) => {
  //   const data = [...cirtificate];
  //   console.log("i :", index);
  //   console.log("name :", e.target);
  //   data[index][e.target.name] = e.target.value;
  //   setCirtificate(data);
  // };

  const onAddCirtificateHandler = () => {
    append1();
  };

  const onDeleteCirtificateHandler = () => {
    if (fields1.length > 1) remove1(fields1.length - 1);
  };

  const onAddAddressHandler = () => {
    append2();
  };

  const onDeleteAddressHandler = () => {
    if (fields2.length > 1) remove2(fields2.length - 1);
  };

  // const validationChecker = (field_name) => {
  //   const val = getValues().certificate_name;
  //   console.log(val);
  // };

  const onSubmit = (data) => {
    //console.log(data);
    setNewForm(data);
  };

  useEffect(() => {
    if (fields1.length === 0) {
      append1();
    }
    if (fields2.length === 0) {
      append2();
    }
    console.log(newForm);
  }, [newForm]);

  // console.log("errors: ", errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name : </label>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
              pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" onChange={onChange} value={value} />
            )}
          />
          <div>
            {errors.name?.type === "required" && <span>required name</span>}
            {errors.name?.type === "pattern" && (
              <span> please enter a valid name</span>
            )}
          </div>
        </div>
        <div>
          <label>Email : </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" onChange={onChange} value={value} />
            )}
          />
          <div>
            {errors.email?.type === "required" && <span>required email</span>}
            {errors.email?.type === "pattern" && (
              <span> please enter a valid email address </span>
            )}
          </div>
        </div>
        <div>
          <label>Mobile : </label>
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: true,
              pattern: /^(0|91|7|6|8)?[6-9][0-9]{9}$/,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="number" onChange={onChange} value={value} />
            )}
          />
          <div>
            {errors.mobile?.type === "required" && (
              <span>required phone number</span>
            )}
            {errors.mobile?.type === "pattern" && (
              <span> please enter a valid phone number </span>
            )}
          </div>
        </div>

        <div>
          <label>Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <div>
                <label>Male</label>
                <input
                  name={"radio"}
                  type="radio"
                  onChange={onChange}
                  value={"male"}
                />
                <label>female</label>
                <input
                  name={"radio"}
                  type="radio"
                  onChange={onChange}
                  value={"female"}
                />
                <label>other</label>
                <input
                  name={"radio"}
                  type="radio"
                  onChange={onChange}
                  value={"other"}
                />
              </div>
            )}
          />
          <div>
            {errors.gender?.type === "required" && (
              <span>please select gender</span>
            )}
          </div>
        </div>

        <div>
          <label>Add Cirtificate</label>
          <button type="button" onClick={onAddCirtificateHandler}>
            +
          </button>
          <button type="button" onClick={onDeleteCirtificateHandler}>
            -
          </button>
          {fields1.map((item, index) => {
            return (
              <div key={item.id}>
                <input
                  type="text"
                  placeholder="Certificate Name"
                  name="certificate_name"
                  {...register(`certificate[${index}].certificate_name`, {
                    //mode: "onChange",
                    validate: () => {
                      if (
                        watch(`certificate.[${index}].certificate_id`) === "" &&
                        watch(`certificate.[${index}].certificate_id`) !== ""
                      )
                        return "please fill C_name";
                      else return true;
                    },
                  })}
                  //defaultValue={item.cirtificate_name}
                />
                {errors.certificate &&
                  errors.certificate[index]?.certificate_name?.type ===
                    "validate" && (
                    <span>
                      {errors.certificate[index]?.certificate_name?.message}
                    </span>
                  )}
                <input
                  type="text"
                  placeholder="Certificate Id"
                  name="certificate_id"
                  {...register(`certificate[${index}].certificate_id`, {
                    rules: { mode: "onChange" },
                    validate: () => {
                      if (
                        watch(`certificate.[${index}].certificate_id`) === "" &&
                        watch(`certificate.[${index}].certificate_name`) !== ""
                      ) {
                        return "please fill c_id";
                      } else if (
                        watch(`certificate.[${index}].certificate_id`) !== "" &&
                        watch(`certificate.[${index}].certificate_name`) === ""
                      ) {
                        return "please fill c_name";
                      } else if (
                        watch(`certificate.[${index}].certificate_id`) !== "" &&
                        watch(`certificate.[${index}].certificate_name`) !== ""
                      ) {
                        return true;
                      }
                    },
                  })}
                />
                {errors.certificate &&
                  errors.certificate[index]?.certificate_id?.type ===
                    "validate" && (
                    <span>
                      {errors.certificate[index]?.certificate_id?.message}
                    </span>
                  )}
                <button
                  type="button"
                  onClick={() => {
                    remove1(index);
                  }}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
        <div>Add Address</div>
        <button type="button" onClick={onAddAddressHandler}>
          +
        </button>
        <button type="button" onClick={onDeleteAddressHandler}>
          -
        </button>
        {/* {console.log("fields2", fields2)} */}
        {fields2.map((item, index) => {
          return (
            <div key={item.id}>
              <span>
                <Controller
                  name={`address[${index}].landmark1`}
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="text"
                      placeholder="Landmark 1"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </span>
              <div>
                {errors?.address?.length && errors?.address[index]?.landmark1
                  ? errors?.address[index]?.landmark1?.type === "required" && (
                      <span>please fill landmark1</span>
                    )
                  : null}
              </div>
              <span>
                <Controller
                  name={`address[${index}].landmark2`}
                  control={control}
                  rules={{}}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="text"
                      placeholder="Landmark 2"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </span>
              <span>
                <Controller
                  name={`address[${index}].city`}
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      placeholder="City"
                      isMulti={false}
                      options={city}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </span>
              <div>
                {errors?.address?.length &&
                  errors?.address[index]?.city?.type === "required" && (
                    <span>please select city</span>
                  )}
              </div>
              <span>
                <Controller
                  name={`address[${index}].state`}
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      placeholder="State"
                      isMulti={false}
                      options={state}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </span>
              <div>
                {errors?.address?.length &&
                  errors?.address[index]?.state?.type === "required" && (
                    <span>please select state</span>
                  )}
              </div>
              <span>
                <Controller
                  name={`address[${index}].zipcode`}
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="text"
                      placeholder="Zip Code"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </span>
              <div>
                {errors?.address?.length &&
                  errors?.address[index]?.zipcode?.type === "required" && (
                    <span>Zipcode required</span>
                  )}
                {errors?.address?.length &&
                  errors?.address[index]?.zipcode?.type === "pattern" && (
                    <span> please enter a valid zipcode </span>
                  )}
              </div>
            </div>
          );
        })}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ModifiedNewForm;
