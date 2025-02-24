import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import clientsData from "./data/clients.json"; 
import "./index.css"; 
const ClientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const client = clientsData.find((c) => c.id === parseInt(id));

  const [etat, setEtat] = useState(client?.etat || "non traiter");
  const [total, setTotal] = useState(client?.total || "");
  const [observation, setObservation] = useState("");


  const handleSave = () => {
    console.log("Saved Client Details:", { etat, total, observation });
    alert("Changes saved!"); 
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1 className="title">Client Details</h1>
      <div className="container">
        <div className="row">
          <div className="form-group">
            <label htmlFor="name">Nom:</label>
            <input type="text" id="name" value={client.name} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" value={client.id} readOnly />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="region">Region:</label>
            <input type="text" id="region" value={client.region} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="numtel">Num Tel:</label>
            <input type="text" id="numtel" value={client.numtel} readOnly />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <input type="text" id="type" value={client.type} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="total">Total:</label>
            <input type="text" id="total" value={total} onChange={(e) => setTotal(e.target.value)} />
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

        
        
          <button className="imprimer-btn">Imprimer</button>
          <div className="buttons">
            <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Annuler</button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;