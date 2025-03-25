import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import clientsData from "./data/clients.json"; 
import historiqueData from "./data/historique.json";
import "./index.css"; 

const ClientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const client = clientsData.find((c) => c.client_id === parseInt(id));

  const [etat, setEtat] = useState(client?.etat || "non traiter");
  const [total_amount, setTotal_amount] = useState(client?.total_amount || "");
  const [observation, setObservation] = useState("");

  const handleSave = () => {
    console.log("Saved Client Details:", { etat, total_amount, observation });
    alert("Changes saved!"); 
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (!client) {
    return <p>Client not found.</p>;
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1 className="title">Client Details</h1>
      <div className="big-container">
      <div className="container">
        <div className="row">
          <div className="form-group">
            <label htmlFor="name">Nom:</label>
            <input type="text" id="name" value={client.name} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" value={client.client_id} readOnly />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label htmlFor="name">Prenom:</label>
            <input type="text" id="surname" value={client.surname} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="id">Adresse:</label>
            <input type="text" id="id" value={client.adresse} readOnly />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="region">Region:</label>
            <input type="text" id="region" value={client.region} />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Num Tel:</label>
            <input type="text" id="phone_number" value={client.phone_number} readOnly />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="client_type">Type:</label>
            <input type="text" id="client_type" value={client.client_type} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="total_amount">Total:</label>
            <input type="text" id="total" value={total_amount} onChange={(e) => setTotal_amount(e.target.value)} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="etat">Etat:</label>
            <select id="etat" value={etat} onChange={(e) => setEtat(e.target.value)}>
              <option value="payment regle">Payment Reglé</option>
              <option value="non traiter">Non Traité</option>
              <option value="avocat">Avocat</option>
              <option value="huissier">Huissier</option>
              <option value="juridique">Juridique</option>
              <option value="decede">Décédé</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="observation">Observation:</label>
            <textarea id="observation" cols="50" rows="4" value={observation} onChange={(e) => setObservation(e.target.value)}></textarea>
          </div>
        </div>

        <button
          className="imprimer-btn"
          disabled={!["avocat", "huissier", "juridique"].includes(etat)}>
          Imprimer
        </button>
        <div className="buttons">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Annuler</button>
        </div>
        </div>
        <div className="historique">
          <h2 className="historique-title">Historique:</h2>
          <ul className="historique-list">
            {historiqueData.map((item) => (
              <li key={item.id}>
                <strong>{item.date}</strong> - {item.action} 
              </li>
            ))}
          </ul>
      </div>
     </div>
   </div>

  );
};

export default ClientDetails;
