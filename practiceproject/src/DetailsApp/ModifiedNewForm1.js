import { useState, useEffect } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "react-select";

const ModifiedNewForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
    getValues,
  } = useForm({
    mode: "onChange",

    defaultValues: {
      id: 0,
      name: "",
      email: "",
      mobile: "",
      gender: "",
      certificate: [{ id: 0, certificate_name: "", certificate_id: "" }],
      address: [
        {
          id: 0,
          landmark1: "",
          landmark2: "",
          city: "",
          state: "",
          zipcode: "",
        },
      ],
    },
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
  // const [certificate, setCertificate] = useState([
  //   {
  //     id: 0,
  //     cirtificate_name: "",
  //     cirtificate_id: "",
  //   },
  // ]);

  // const [address, setAddress] = useState([
  //   {
  //     id: 0,
  //     address1: "",
  //     address2: "",
  //     city: "",
  //     state: "",
  //     pin: "",
  //   },
  // ]);

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
    console.log(getValues());
    reset();
    // setNewForm({
    //   name: data.name,
    //   email: data.email,
    //   mobile: data.mobile,
    //   radio: data.radio,
    //   cirtificate_details: cirtificate,
    // });
  };

  useEffect(() => {
    // if (fields1.length === 0) {
    //   append1();
    // }
    // if (fields2.length === 0) {
    //   append2();
    // }
    //console.log(newForm);
  }, [newForm]);

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
              minLength: 4,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" onChange={onChange} value={value} />
            )}
          />
          <div>
            {errors.name?.type === "required" && <span>required name</span>}
            {errors.name?.type === "minLength" && (
              <span> minimum required length is 4</span>
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
          <button onClick={onAddCirtificateHandler}>+</button>
          <button onClick={onDeleteCirtificateHandler}>-</button>
          {fields1.map((item, index) => {
            return (
              <div key={item.id}>
                <input
                  type="text"
                  placeholder="Certificate Name"
                  name="certificate_name"
                  {...register(`certificate[${index}].certificate_name`, {})}
                  //defaultValue={item.cirtificate_name}
                />
                <input
                  type="text"
                  placeholder="Certificate Id"
                  name="certificate_id"
                  {...register(
                    `certificate[${index}].certificate_id`,
                    {}
                    //{
                    //   validate:
                    //     (getValues().certificate_name.value && {
                    //       required: true,
                    //     }) ||
                    //     "please enter cirtificate name",
                    // }
                  )}
                  //defaultValue={item.cirtificate_id}
                />
                {/* <div>{errors.certificate_id.message}</div> */}
                <button type="button" onClick={(index) => remove1(index)}>
                  remove
                </button>
              </div>
            );
          })}
        </div>
        <div>Add Address</div>
        <button onClick={onAddAddressHandler}>+</button>
        <button onClick={onDeleteAddressHandler}>-</button>
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
                      // name={`address[${index}].landmark1`}
                      placeholder="Landmark 1"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </span>
              <div>
                {/* {errors.address[index].landmark1
                  ? errors.address[index].landmark1.type === "required" && (
                      <span>please fill landmark1</span>
                    )
                  : null} */}
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
                {/* {errors.address[index].city?.type === "required" && (
                  <span>please select city</span>
                )} */}
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
                {/* {errors.address[index].state?.type === "required" && (
                  <span>please select state</span>
                )} */}
              </div>
              <span>
                <Controller
                  name={`address[${index}].zipcode`}
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^([A-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="number"
                      placeholder="Zip Code"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </span>
              {/* <div>
                {errors.address[index].zipcode?.type === "required" && (
                  <span>Zipcode required</span>
                )}
                {errors.address[index].zipcode?.type === "pattern" && (
                  <span> please enter a valid zipcode </span>
                )}
              </div> */}
            </div>
          );
        })}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ModifiedNewForm;

{
  /* {cirtificate &&
            cirtificate.map((input, index) => {
              //   console.log("input :", input);
              //   console.log("index :", index);
              return (
                <div>
                  <div key={input.id}>
                    <span>
                      <label>Cirtificate Name : </label>
                      <Controller
                        name="cirtificate_name"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <input
                            type="text"
                            name="cirtificate_name"
                            // onChange={(e, index) => {
                            //   cirtificateInputHandler(e, index);
                            //   onChange(index);
                            // }}
                            onChange={(e) => {
                              //   console.log("e(o) :", e);
                              //   console.log("index(o) :", index);
                              cirtificateInputHandler(e, index);
                              onChange(e);
                            }}
                            value={value}
                          />
                        )}
                      />
                    </span>
                    <span>
                      <label>Cirtificate Id : </label>
                      <Controller
                        name="cirtificate_id"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <input
                            type="text"
                            name="cirtificate_id"
                            onChange={(e) => {
                              //   console.log("e(o) :", e);
                              //   console.log("index(o) :", index);

                              cirtificateInputHandler(e, index);
                              onChange(e);
                            }}
                            value={value}
                          />
                        )}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
         */
}

{
  /* <div>
          <label>Add Address</label>
          <button>+</button>
          <button>-</button>
          {address &&
            address.map((input, index) => {
              return (
                <div key={input.id}>
                  <span>
                    <label>Landmark 1 : </label>
                    <Controller
                      name="address1"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <input type="text" onChange={onChange} value={value} />
                      )}
                    />
                  </span>
                  <span>
                    <label>Landmark 2 : </label>
                    <Controller
                      name="address1"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <input type="text" onChange={onChange} value={value} />
                      )}
                    />
                  </span>
                  <span>
                    <label>City : </label>
                    <Controller
                      name="city"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          isMulti={false}
                          options={city}
                          onChange={onChange}
                          value={value}
                        />
                      )}
                    />
                  </span>
                  <span>
                    <label>State : </label>
                    <Controller
                      name="stete"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          isMulti={false}
                          options={state}
                          onChange={onChange}
                          value={value}
                        />
                      )}
                    />
                  </span>
                  <span>
                    <label>Pincode : </label>
                    <Controller
                      name="address1"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="number"
                          onChange={onChange}
                          value={value}
                        />
                      )}
                    />
                  </span>
                </div>
              );
            })}
        </div> */
}
