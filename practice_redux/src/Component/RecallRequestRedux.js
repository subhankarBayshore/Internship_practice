import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiUrl1Token, apiUrl2Token } from "../Store/AllSlices/AuthToken";
import { getResult } from "../Store/AllSlices/ResultSlices";
import axios from "axios";

const RecallRequestRedux = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.token);
  const result = useSelector((state) => state.result);

  console.log(result);
  //console.log(auth);

  const apiUrl1 = "https://test.api.wagelink.io/api/v1/admin";

  const apiUrl2 = "https://test.api.wagelink.io/api/v1/admin";

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    try {
      const resp = await axios.get(`${apiUrl1}/token`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      axios.defaults.headers.Authorization = `Bearer ${auth.token}`;
      dispatch(apiUrl1Token(resp.data.result.refreshToken));
      dispatch(apiUrl2Token(resp.data.result.token));
      getUserData();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const data = await axios.get(
        `${apiUrl2}/get-all-user/6497bf5d56b15b2efb8e6414?search=`
      );
      // console.log(data.data);
      //console.log(data.data.result.users);
      dispatch(getResult(data.data.result.users));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>Api Test</div>
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="button">Search</button>
      <div>
        <tbody>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employment Id</th>
            <th>Email</th>
          </tr>
          {result.users &&
            result.users.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.employment_id}</td>
                <td>{item.email}</td>
              </tr>
            ))}
        </tbody>
      </div>
    </div>
  );
};

export default RecallRequestRedux;
