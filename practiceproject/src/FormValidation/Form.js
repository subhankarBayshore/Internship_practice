import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    setValue,
  } = useForm();
  const [form, setForm] = useState([]);

  const arr1 = [
    { id: 1, topicName: "mr" },
    { id: 2, topicName: "miss" },
  ];
  const passportRegex = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
  const aadharcardRegex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
  const PanRegex = /^([A-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  const pinCodeRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;

  const submitHandler = (data) => {
    setForm([
      ...form,
      {
        firstname: data.firstname,
        middlename: data.middlename,
        lastname: data.lastname,
        aadharcard: data.aadharcard,
        pan: data.pan,
        passport: data.passport,
        country: data.country,
        religion: data.religion,
        nationality: data.nationality,
        pAddress: data.pAddress,
        tAddress: data.tAddress,
        pin: data.pin,
      },
    ]);
  };

  const copyHandler = () => {
    let value1 = getValues("pAddress");

    if (value1 !== "null") {
      setValue("tAddress", value1);
    }
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Firstname</label>

          <Controller
            name="firstname"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          <label>Middlename</label>
          <Controller
            name="middlename"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          <label>Lastname</label>
          <Controller
            name="lastname"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          <label>Aadhar Card</label>
          <Controller
            name="aadharcard"
            control={control}
            rules={{
              required: true,
              pattern: aadharcardRegex,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          {errors.aadharcard?.type === "required" && (
            <span>Aadhar required</span>
          )}
          {errors.aadharcard?.type === "pattern" && <span>Invalid Aadhar</span>}
        </div>
        <div>
          <label>PAN</label>
          <Controller
            name="pan"
            control={control}
            rules={{
              required: true,
              pattern: PanRegex,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          {errors.pan?.type === "required" && <span>pan required</span>}
          {errors.pan?.type === "pattern" && <span>Invalid pan</span>}
        </div>

        <div>
          <label>Passport</label>
          <Controller
            name="passport"
            control={control}
            rules={{
              required: true,
              pattern: passportRegex,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          {errors.passport?.type === "required" && (
            <span>Passport required</span>
          )}
          {errors.passport?.type === "pattern" && <span>Invalid Passport</span>}
        </div>
        <div>
          <label>Country</label>
          <Controller
            name="country"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          <label>Religion</label>
          <Controller
            name="religion"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          <label>Nationality</label>
          <Controller
            name="nationality"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          <label>P.Address</label>
          <Controller
            id="pAddress"
            name="pAddress"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          <label>T.Address</label>
          <Controller
            id="tAddress"
            name="tAddress"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
          <input type="checkbox" onClick={copyHandler} />
        </div>
        <div>
          <label>PIN</label>
          <Controller
            name="pin"
            control={control}
            rules={{
              required: true,
              pattern: pinCodeRegex,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" value={value} onChange={onChange} />
            )}
          />
        </div>
        <div>
          {errors.pin?.type === "required" && <span>Pin required</span>}
          {errors.pin?.type === "pattern" && <span>Invalid Pin</span>}
        </div>

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
