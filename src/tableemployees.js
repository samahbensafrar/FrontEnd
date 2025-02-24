import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Tableemployees = ({ employees = [] }) => { 
  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Mot de passe</th>
            <th>Num tel</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees?.length > 0 ? ( 
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.nom}</td>
                <td>{employee.mot_de_passe}</td>
                <td>{employee.num_tel}</td>
                <td>{employee.role}</td>
                <td>
                  <IconButton className="edit-icon">
                    <EditIcon sx={{ color: "#233e83" }} />
                  </IconButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "red" }}>
                Aucun employé trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tableemployees;
