import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const DateTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [flag, setFlag] = useState(true);

  const changeHandler = () => {
    setFlag(!flag);
  };

  const submitHandler = () => {
    if (flag) {
      console.log(`startdate : ${startDate}`);
      console.log(`enddate : ${endDate}`);
    } else console.log(`startdate : ${startDate}`);
  };
  return (
    <div>
      <DateTimePicker id="first" onChange={setStartDate} value={startDate} />
      <input type="checkbox" onChange={(e) => changeHandler(e)} />
      {flag && <DateTimePicker onChange={setEndDate} value={endDate} />}
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default DateTime;
