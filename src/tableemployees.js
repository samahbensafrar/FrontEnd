import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import LockResetIcon from '@mui/icons-material/LockReset';

const Tableemployees = ({ employees = [], onPasswordChange }) => { 
  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom et prenom</th>
            <th>Num tel</th>
            <th>Role</th>
            <th className="action"> Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees?.length > 0 ? ( 
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.nom}</td>
                <td>{employee.num_tel}</td>
                <td>{employee.role}</td>
                <td>
                  <div className="editingIcons">
                      <IconButton className="edit-icon-first">
                        <EditIcon sx={{ color: "#233e83" }} />
                      </IconButton>
                      <IconButton className="edit-icon" onClick={() => onPasswordChange(employee.id)}>
                        <LockResetIcon sx={{ color: "#233e83" }} />
                      </IconButton>
                  </div>
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