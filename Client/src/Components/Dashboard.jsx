import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  let url = "http://localhost:3000/students/dashboard";
  let token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application /json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === true) {
          console.log("success");
        } else {
          localStorage.removeItem("token");
          navigate("/login");
          console.log(res.status);
          console.log("success");
        }
      });
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light p-3" id="navba">
        <div className="container-fluid ">
          <h1>hello</h1>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-danger p-2" id="navbaba">
        

        <div className="container-fluid d-flex justify-content-between">
            <div className="text-light">
                <p className="ava">🍳Available Balance</p>
                <p className="ms-3">$300</p>
            </div>
            
            <div className="text-light">
                <p className="omo"> Transaction...n History {'>'}</p>
                <button className="butin" style={{border:'none', borderRadius:'20% 0 20% 0', padding:'3px', bottom:'50px'}}>+Add Money</button>
            </div>

        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
