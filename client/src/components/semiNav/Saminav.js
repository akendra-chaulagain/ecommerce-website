// import React from "react";
// import "./Saminav.css";
// import { Link } from "react-router-dom";

// const SemiNav = ({ setCategoryData }) => {
//   return (
//     <>
//       <div className="container-fluid SaminavbarContainer">
//         <div className="row">
//           <div className="col-12">
//             <ul className=" navBarItems">
//               {/* home */}
//               <li className="nav-itemLi">
//                 <Link className="nav-Link" to="/">
//                   Home
//                 </Link>
//               </li>
//               {/* all products */}
//               <li className="nav-itemLi">
//                 <Link className="nav-Link" to="/allproducts">
//                   All products
//                 </Link>
//               </li>
//               <li className="nav-itemLi">
//                 <select onChange={(e) => setCategoryData(e.target.value)}>
//                   <option >Select</option>
//                   <option value="electronic">Electronic</option>
//                   <option value="laptop">Computer</option>
//                   <option value="fitness">Fitness</option>
//                   <option value="cloth">Cloth</option>
//                   <option value="book">Books</option>
//                   <option value="cosmetic">Cosmetic</option>
//                 </select>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SemiNav;

import React from "react";
import "./Saminav.css";
import { Link } from "react-router-dom";

const SemiNav = ({ setCategoryData }) => {
  return (
    <>
      <div className="container-fluid SaminavbarContainer">
        <div className="row">
          <div className="col-12">
            <nav className="samiNavbar ">
              <li className="ml-5">
                <Link className="nav-Link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-itemLi">
                <Link className="nav-Link" to="/allproducts">
                  All products
                </Link>
              </li>

              <li className="nav-itemLi nav-Link">
                <select onChange={(e) => setCategoryData(e.target.value)}>
                  <option>Select</option>
                  <option value="electronic">Electronic</option>
                  <option value="laptop">Computer</option>
                  <option value="fitness">Fitness</option>
                  <option value="cloth">Cloth</option>/
                  <option value="book">Books</option>
                  <option value="cosmetic">Cosmetic</option>
                </select>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SemiNav;
