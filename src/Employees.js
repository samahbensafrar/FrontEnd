import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SearchBar from './components/searchBar';
import dataList from "./data/Employees.json";
import Tableemployees from "./tableemployees";

const Employees = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState(false);
    const [employees, setEmployees] = useState(dataList);
    const [formData, setFormData] = useState({
        nom: "",
        num_tel: "",
        role: ""
    });

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            ...formData
        };
        setEmployees([...employees, newEmployee]);
        setFormData({ nom: "", mot_de_passe: "", num_tel: "", role: "" });
        toggleModal();
    };


    const filteredData = employees.filter(
        (employee) =>
            employee.nom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.role?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [passwordModal, setPasswordModal] = useState(false);

    const togglePasswordModal = () => {
        setPasswordModal(!passwordModal);
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword({
            ...password,
            [name]: value
        });
    };
    const [error, setError] = useState("");

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password.newPassword !== password.confirmPassword) {
            setError("Le nouveau mot de passe et la confirmation ne correspondent pas");
            return;
        }
        setError("")
        const updatedEmployees = employees.map((employee) =>
            employee.id === selectedEmployeeId
                ? { ...employee, mot_de_passe: password.newPassword }
                : employee
        );
        setEmployees(updatedEmployees);
        setPassword({ oldPassword: "", newPassword: "", confirmPassword: "" });
        togglePasswordModal();
    };

    const openPasswordModal = (employeeId) => {
        setSelectedEmployeeId(employeeId);
        togglePasswordModal();
    };
  

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="employee-container">
                <h1>List des Employees</h1>
                <div className="search-import">
                    <SearchBar className="search" onSearch={setSearchTerm} />
                    <button className="ajouter" onClick={toggleModal}>
                        Ajouter employee
                    </button>
                </div>

                <Tableemployees employees={filteredData} onPasswordChange={openPasswordModal} />
            </div>

            {modal && (
                <div className="modal">
                    <div className='overlay' onClick={toggleModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>Ajouter Employee</h3>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="User name"
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="mot_de_passe"
                                    placeholder="Mot de passe"
                                    value={formData.mot_de_passe}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="num_tel"
                                    placeholder="Numéro"
                                    value={formData.num_tel}
                                    onChange={handleInputChange}
                                    required
                                />
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Sélectionner un rôle</option>
                                    <option value="admin">Admin</option>
                                    <option value="El Wouroud">El Wouroud</option>
                                    <option value="wlaidyaich">Oulad Yaich</option>
                                    <option value="boufarik">Boufarik</option>
                                    <option value="afroun">Aafroun</option>
                                    <option value="mouzaya">Mouzaya</option>
                                    <option value="bouzegza">Bouzegza</option>
                                </select>
                                <div className="modal-buttons">
                                    <button type="button" className="cancel" onClick={toggleModal}>
                                        Annuler
                                    </button>
                                    <button type="submit" className="add">
                                        Ajouter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {passwordModal && (
                <div className="modal">
                    <div className='overlay' onClick={togglePasswordModal}>
                        <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
                            <h3>Changer Le Mot De Passe</h3>
                            <form onSubmit={handlePasswordSubmit}>
                                <input
                                    type="password"
                                    name="oldPassword"
                                    placeholder="Ancien mot de passe"
                                    value={password.oldPassword}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="newPassword"
                                    placeholder="Nouveau mot de passe"
                                    value={password.newPassword}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirmer le mot de passe"
                                    value={password.confirmPassword}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                {error && <p style={{ color: "white", fontSize: "15px", textAlign:"center"}}>{error}</p>}
                                <div className="modal-buttons">
                                    <button type="button" className="cancel" onClick={togglePasswordModal}>
                                        Annuler
                                    </button>
                                    <button type="submit" className="save">
                                        Enregistrer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Employees;