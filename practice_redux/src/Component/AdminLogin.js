import { useForm } from "react-hook-form";
import { useNavigate, useNavigation } from "react-router-dom";

const AdminLogin = ({ getOtherRequest }) => {
  const { control, handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let result = await fetch(
      "https://test.api.wagelink.io/api/v1/admin/login",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    result = await result.json();
    localStorage.setItem("adminCred", result);
    navigate("/dashboard");
    // getOtherRequest();
    // console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            control={control}
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <input
            type="password"
            control={control}
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
