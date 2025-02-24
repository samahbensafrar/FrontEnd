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
        mot_de_passe: "",
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
            employee.mot_de_passe?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.role?.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

                <Tableemployees employees={filteredData} />
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
        </>
    );
};

export default Employees;