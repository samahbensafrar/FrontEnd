import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import LockResetIcon from '@mui/icons-material/LockReset';

const Tableemployees = ({ employees = [], onPasswordChange, onDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Num tel</th>
            <th>Role</th>
            <th className="action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.username}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.role}</td>
                <td>
                  <div className="editingIcons">
            
                  <IconButton className="edit-icon-first" onClick={() => onDelete(employee)}>
                   <DeleteIcon sx={{ color: "#233e83" }} />
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
              <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
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
