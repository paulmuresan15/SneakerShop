import React from "react";
import Navigation from "../HomePage/Navigation";
import FooterPage from "../HomePage/FooterPage";
import BrandService from "../services/BrandService";

function ControlPanel() {
    return(
        <div className="mainContainer">
            <div className="upContainer">
                <div className="navbar">
                    <Navigation />
                </div>
            </div>
            <div>
                <button onClick={() => {
                    console.log(BrandService.addNewBrand("Puma", "Puma description"));
                }}> </button>
            </div>
            <FooterPage/>
        </div>
    )
}

export default ControlPanel;