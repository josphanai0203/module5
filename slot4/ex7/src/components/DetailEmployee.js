import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailEmployee = () => {
  const employees = [
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];
  const prams = useParams();
  const id = prams.id;
  const employee = employees.find((e) => e.id == id);
  console.log(employee);
  return (
    <>
      {!employee ? (
        <></>
      ) : (
        <div>
          <h3>Id: {employee.id}</h3>
          <h3>Name: {employee.name}</h3>
          <h3>Age: {employee.age}</h3>
        </div>
      )}
    </>
  );
};

export default DetailEmployee;
