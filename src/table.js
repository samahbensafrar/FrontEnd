import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { IconButton } from "@mui/material";
import axios from "axios";

const Table = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/clients/")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });
  }, []);

  const normalize = (str) => {
    return str
      ?.trim()
      .toLowerCase()
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, ""); 
  };
  
  const getEtatStyle = (etat) => {
    const cleanEtat = normalize(etat);
  
    switch (cleanEtat) {
      case "non traite":
        return { color: "red" };
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
          <th>Prenom</th>
          <th>Num Tel</th>
          <th>État</th>
          <th>Type</th>
          <th>Région</th>
          <th>Plus</th>
        </tr>
      </thead>
      <tbody>
        {clients.length > 0 ? (
          clients.map((client) => (
            <tr key={client.id}>  
              <td>{client.client_id}</td>
              <td>{client.name}</td>
              <td>{client.surname}</td>
              <td>{client.phone_number}</td>
              <td style={getEtatStyle(client.etat)}>{client.etat}</td>
              <td>{client.client_type}</td>
              <td>{client.region}</td>
              <td>
                <IconButton
                  className="edit-icon"
                  onClick={() => navigate(`/client/${client.id}`)} 
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
              No clients found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
