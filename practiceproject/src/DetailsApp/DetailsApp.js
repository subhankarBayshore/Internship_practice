import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const DetailsApp = () => {
  const { control, handleSubmit } = useForm();

  let [detailsArray, setDetailsArray] = useState([]);

  let [skills, setSkills] = useState([
    {
      skillname: "",
      skilllevel: "",
    },
  ]);

  const [allSkills, setAllSkills] = useState();

  const submitDetails = (data) => {
    const recentSkills = [
      ...skills,
      { skillname: data.setSkills, skilllevel: data.skilllevel },
    ];
    // follow upper pattern
    setDetailsArray([
      ...detailsArray,
      {
        id: detailsArray.length + 1,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        recentSkills,
      },
    ]);
  };

  useEffect(() => {
    console.log(detailsArray);
  }, [detailsArray]);

  // let allSkills = [...skills];

  const removeHandler = (index) => {};

  const addSkillHandler = () => {};

  return (
    <>
      <h1>Details App</h1>
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
          {/* skills, index */}
          {skills &&
            skills.map(() => {
              return (
                <div>
                  <Controller
                    name="skillname"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type="text"
                        onChange={onChange}
                        value={skills.name}
                      />
                    )}
                  />
                  <select
                    name="skilllevel"
                    value={skills.name}
                    //onChange={(e) => addSkillHandler(skills.name, e)}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="pro">Pro</option>
                  </select>

                  <button type="button" onClick={() => removeHandler()}>
                    remove
                  </button>
                </div>
              );
            })}
          <button type="button" onClick={() => addSkillHandler()}>
            Add Skils
          </button>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DetailsApp;

//* addSkillHandler */
// //console.log(allSkills);
// const oldSkills = [
//   { skillname: skills.skillname, skilllevel: skills.skilllevel },
// ];
// console.log(oldSkills);
// if (e) {
//   setSkills(oldSkills, oldSkills.length + 1);
// }
// const oldSkills = [...skills];
// setSkills(oldSkills, { skillname: "", skilllevel: "" });
// console.log(skills);

// remove handler
// //    console.log(allSkills);
// let updtaedSkills = allSkills.splice(index, 1);
// setSkills(updtaedSkills);
// //    console.log(updtaedSkills);
