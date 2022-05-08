import React from "react";
import Navigation from "../../HomePage/Navigation";
import FooterPage from "../../HomePage/FooterPage";
// import GetCategories from "../Requests/Categories/GetCategories";
// import GetCategoriesById from "../Requests/Categories/GetCategoryById";
import ProductPresentation from "../components/ProductPresentation";
function Kids() {

  return(
    <div className="mainContainer">
        <div className="upContainer">
          <div className="navbar">
            <Navigation />
          </div>
        </div>
        <ProductPresentation/>
        <FooterPage/>
    </div>
  )
}

export default Kids;