import React from "react";
import "../index.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
    return (

     <div className="sidebar">
         <img src={require("../images/logo-at.png")} alt="algerie-telecom" />
         <ul className="sidebarList">
            {SidebarData.map((value, key) =>{
                return(
                    <li
                        key = {key}
                        className="row"
                        id={window.location.pathname == value.link ? "active" : ""}
                        onClick ={() =>{
                            window.location.pathname = value.link;
                        } }
                     > 
                     <div  id="icon">{value.icon}</div><div id="title">{value.title}</div>
                     </li>
                )

            }

            )}
            
         </ul>
        </div>
   
    
    )
}


export default Sidebar