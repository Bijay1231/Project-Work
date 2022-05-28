import React, { useState } from "react";
import axios from "axios";
import { url } from "../../url";
import { Row, Col, Container } from "react-bootstrap";
function Sidebar() {
  const [subCat, setSubcat] = useState([]);
  const SubCat = (id) => {
    console.log(id);
    axios
      .get(url + `category/getsub/${id}`)
      .then((res) => setSubcat(res.data.result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        {" "}
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            {subCat.map(sub => (
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <span data-feather="home"></span>
                  {sub.catName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
