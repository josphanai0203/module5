import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
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
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {employees.map((employee) => (
          <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td><Link to={'/employee/'+employee.id} className="btn btn-primary">Edit</Link></td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default Employee;
