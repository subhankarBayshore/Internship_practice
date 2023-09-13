// import React, { useMemo } from "react";
// import { useTable } from "react-table";
import { useState, useEffect } from "react";
import axios from "axios";

// import Columns from "../Component/Columns";

const RecallRequest2 = () => {
  const [token1, setToken1] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDk3YzAxMzg2NjlhNjAxMGZiN2E3YzMiLCJpYXQiOjE2OTE3MzQ2NDcsImV4cCI6MTY5NDMyNjY0N30.zK0DPel338yPhNJwcb7iQLBq4ZolcPh8mRxxlSQx4Qc"
  );
  //  const [token2, setToken2] = useState("");

  const [result, setResult] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const [particularResult, setParticularResult] = useState([]);

  const apiUrl1 = "https://test.api.wagelink.io/api/v1/admin";

  const apiUrl2 = "https://test.api.wagelink.io/api/v1/admin";

  useEffect(() => {
    getAccessToken();
    console.log(particularResult);
  }, [particularResult]);

  const getAccessToken = async () => {
    try {
      const resp = await axios.get(`${apiUrl1}/token`, {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      });
      axios.defaults.headers.Authorization = `Bearer ${resp.data.result.token}`;
      setToken1(resp.data.result.refreshToken);
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
      console.log(data.data);
      setResult(data.data.result.users);
    } catch (err) {
      console.log(err);
    }
  };

  const onSearchHandler = () => {
    let data = searchInput;

    setParticularResult(result.filter((item) => item.employment_id === data));
  };

  // console.log(result);

  // const Columns = useMemo(() => Columns, []);
  // const data = useMemo(() => result.result.user, []);

  // const tableInstanse = useTable({
  //   Columns,
  //   data,
  // });

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstanse;
  return (
    <div>
      <div>Api Test</div>
      <input
        type="text"
        placeholder="Search.."
        id="search"
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <button type="button" onClick={onSearchHandler}>
        Search
      </button>
      <div>
        <tbody>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employment Id</th>
            <th>Email</th>
          </tr>
          {particularResult.length > 0
            ? particularResult.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.employment_id}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })
            : result
            ? result.map((item, index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.employment_id}</td>
                  <td>{item.email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </div>
      {/* 
          <table {...getTableProps}>
            <thead>
              {headerGroups.map((headerGroups) => {
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {headerGroups.headers.map((column) => {
                    <th {...column.getHeaderProps()}>
                      {...column.render("Header")}
                    </th>;
                  })}
                </tr>;
              })}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
    </div>
  );
};

export default RecallRequest2;

// result &&
//   result.map((item, index) => (
//     <tr key={index}>
//       <td>{item._id}</td>
//       <td>{item.first_name}</td>
//       <td>{item.last_name}</td>
//       <td>{item.employment_id}</td>
//       <td>{item.email}</td>
//     </tr>
//   ));
