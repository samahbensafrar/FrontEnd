import React from "react";

import { useNavigate } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { IconButton } from "@mui/material";



const Table = ({ data }) => {
  const navigate = useNavigate();
  const getEtatStyle = (etat) => {
    switch (etat.toLowerCase()) {
      case "non traiter":
        return { color: "red"};
      case "payment regle":
        return { color: "#4caf50" };
      default:
        return { color: "#0A2364" };
    }
  };
  return (
   
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>prenom</th>
            <th>Num Tel</th>
            <th>État</th>
            <th>Type</th>
            <th>Région</th>
            <th>Plus</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((client) => (
              <tr key={client.client_id}>
                <td>{client.client_id}</td>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.phone_number}</td>
                <td style={getEtatStyle(client.etat)}>{client.etat}</td>
                <td>{client.client_type}</td>
                <td>{client.region}</td>
                <td>
                   <IconButton className="edit-icon"
                    onClick={() => navigate(`/client/${client.client_id}`)}
                    style={{ padding: "5px 10px", cursor: "pointer" }}
                  >
                    <EditNoteIcon sx={{ color: "#233e83" }} />
                    </IconButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", color: "red" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

  );
};

export default Table;