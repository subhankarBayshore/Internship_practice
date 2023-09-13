import { useState, useEffect } from "react";
import axios from "axios";

const DemoRecall = () => {
  const [apiTokenFrom1stUrl, setApiTokenFrom1stUrl] = useState();

  const [reviveToken, setReviveToken] = useState(null);

  const [result, setResult] = useState([]);

  const apiUrl1 = "https://test.api.wagelink.io/";

  const token1 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDk3YzAxMzg2NjlhNjAxMGZiN2E3YzMiLCJpYXQiOjE2OTE3MzQ2NDcsImV4cCI6MTY5NDMyNjY0N30.zK0DPel338yPhNJwcb7iQLBq4ZolcPh8mRxxlSQx4Qc";

  const testapi = axios.create({
    baseURL: apiUrl1,
    headers: {
      Authorization: `Bearer ${token1}`,
    },
  });

  const apiUrl2 = "https://test.api.wagelink.io/";

  const token2 = apiTokenFrom1stUrl ? apiTokenFrom1stUrl.token : null;

  //console.log("token 2: ", token2);

  const nextApi = axios.create({
    baseURL: apiUrl2,
    headers: {
      Authorization: `Bearer ${token2}`,
    },
  });

  useEffect(() => {
    testapi
      .get("api/v1/admin/token")
      .then((response) => {
        setApiTokenFrom1stUrl(response.data.result);
      })
      .catch((err) => console.log(err));

    console.log("------Next Step------");

    // nextApi
    //   .get("api/v1/admin/get-all-user/6497bf5d56b15b2efb8e6414?search=")
    //   .then((response) => {
    //     setResult(response.data.result);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  //setReviveToken(apiTokenFrom1stUrl ? apiTokenFrom1stUrl.refreshToken : null);

  useEffect(() => {
    //console.log(apiTokenFrom1stUrl);
    //console.log(result);
  }, []);

  return <div>Api test</div>;
};

export default DemoRecall;
