import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

// const isEmpty = (value) => {
//   if (value && value.trim() === "") return true;
// };

function NewInputForm() {
  const [submitButton, setSubmitButton] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
    reset,
  } = useForm();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#&])(?=.{8,})/;

  // const passwordRegex = /^(?=.*{4,})/;

  const formSubmit = (data) => {
    /*
    if (
      (data.firstName.trim().length > 0 &&
        (data.middleName.trim().length > 0 ||
          data.lastName.trim().length > 0)) ||
      (data.firstName.trim() > 0 &&
        data.middleName.trim() > 0 &&
        data.lastName.trim() > 0)
    ) {
*/
    // if (
    //   data.phone !== data.altPhone &&
    //   data.phone.length >= 10 &&
    //   data.altPhone.length >= 10
    // ) {
    //   console.log(data);
    // }

    /*
      if (
        data.phone !== data.altPhone &&
        data.phone.length >= 10 &&
        data.altPhone.length >= 10
      ) {
        /*if (nameValidateFunc === true) {
        setSubmitButton(true);
        console.log(data);
        console.log(nameValidateFunc);
      }
    } else setSubmitButton(false);  

        console.log(data);
      }
    */
    console.log(data);
    reset();
  };
  const watchArray = watch(["firstName", "middleName", "lastName"]);

  const func = (data) => {
    if (data) {
      if (
        data[0] &&
        data[1] &&
        data[1].length > 0 &&
        data[2] &&
        data[2].length > 0
      ) {
        setValue(
          "email",
          `${data[0]}.${data[1].charAt(0)}${data[2].charAt(0)}@gmail.com`
        );
      } else if (
        data[0] &&
        data[1] &&
        data[1].length > 0 &&
        (data[2] === undefined || data[2] === "")
      ) {
        setValue("email", `${data[0]}.${data[1].charAt(0)}@gmail.com`);
      } else if (
        data[0] &&
        (data[1] === undefined || data[1] === "") &&
        data[2] &&
        data[2].length > 0
      ) {
        setValue("email", `${data[0]}.${data[2].charAt(0)}@gmail.com`);
      } else {
        setValue("email", "");
      }
    }
  };
  /*
  const nameValidateFunc = () => {
    const firstNameIsValid = isEmpty(data[0]);
    const middleNameIsValid = isEmpty(data[1]);
    const lastNameIsValid = isEmpty(data[2]);

    console.log(
      `f: ${firstNameIsValid} m: ${middleNameIsValid} l:${lastNameIsValid}`
    );

    if (!firstNameIsValid && !middleNameIsValid && !lastNameIsValid)
      return true;
    else if (!firstNameIsValid && !middleNameIsValid) return true;
    else if (!firstNameIsValid && !lastNameIsValid) return true;

    return false;
  };
*/
  useEffect(() => {
    func(watchArray);
  }, [watchArray]);

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label> Firstname: </label>
          <Controller
            name="firstName"
            defaultValue={""}
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
          <label> Middlename: </label>
          <Controller
            name="middleName"
            defaultValue={""}
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="text" onChange={onChange} value={value} />
            )}
          />
        </div>

        <div>
          <label> Lastname: </label>
          <Controller
            name="lastName"
            defaultValue={""}
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
          <label>Email: </label>
          <Controller
            name="email"
            defaultValue={""}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <input type="email" onChange={onChange} value={value} />
            )}
          />
        </div>

        {/* <div>
          <label>Password: </label>
          <Controller
            name="password"
            // defaultValue={""}
            control={control}
            rules={{
              required: true,
              pattern: passwordRegex,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="password" onChange={onChange} value={value} />
            )}
          />
        </div>
        <div>
          {errors.password?.type === "required" && <span>Invalid</span>}
          {errors.password?.type === "pattern" && <span>Invalid password</span>}
        </div>

        <div>
          <label htmlFor="Phone">Phone: </label>
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
          <label htmlFor="altPhone">Alternative Phone Number: </label>
          <Controller
            name="altPhone"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <input type="number" onChange={onChange} value={value} />
            )}
          />
        </div> */}

        <div>
          {/* {console.log(submitButton)} */}
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
}

export default NewInputForm;

/*{
<input
  type="password"
  id="passWord"
  {...register(
    "password",
    { required: true },
    {
      pattern: { passwordRegex },
    }
  )}
/>
  } */
