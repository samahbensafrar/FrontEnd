import React from "react";
import { useParams } from "react-router-dom";
import dataList from "./data/Employees.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./index.css"; 

const Profile = () => {
  const { id } = useParams();
  const employee = dataList.find((emp) => emp.id === parseInt(id));

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="profilecontainer">
        <h1 className="profile-title">Profile</h1>
        {employee ? (
          <div className="profile-card">
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">Nom</span>
                <span className="info-value">{employee.nom}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Numéro de téléphone</span>
                <span className="info-value">{employee.num_tel}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Mot de passe</span>
                <span className="info-value">{employee.mot_de_passe}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Rôle</span>
                <span className="info-value">{employee.role}</span>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="profile-error">Aucun employé trouvé.</h1>
        )}
      </div>
    </>
  );
};

export default Profile;