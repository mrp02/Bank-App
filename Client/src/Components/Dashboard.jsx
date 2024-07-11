import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { Link } from "react-router-dom";
import { RiPassPendingFill } from "react-icons/ri";
import {
  MdCardTravel,
  MdOutlineElectricalServices,
  MdOutlineLtePlusMobiledata,
  MdOutlineShoppingCart,
  MdOutlineSportsFootball,
} from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { HiCreditCard } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

const Dashboard = () => {
  const [user, setuser] = useState("");
  let navigate = useNavigate();
  let url = "https://bank-app-ags1.onrender.com/students/dashboard";
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
          setuser(res.data.user);
        } else {
          localStorage.removeItem("token");
          navigate("/login");
          console.log(res.status);
          console.log("success");
        }
      });
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const config = {
    public_key: "FLWPUBK_TEST-559c024efe3348dfb43a673f977f631c-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "+Add Money!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };
  return (
    <div>
      <nav className="d-flex pt-3 bg-light px-4" style={{ justifyContent: "space-between", }} id="navba">
        <div className="navup">
          <h1 style={{ fontSize: "20px" }}>Hello,</h1>
          <p>{user ? ( <span>{user.firstName}</span> ) : ( <span>Loading ...</span> )}</p>
        </div>
        <div>
          <button className="btn btn-danger" onClick={logOut}>Log out</button>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-danger p-2" id="navbaba">
        <div className="container-fluid d-flex justify-content-between">
          <div className="text-light">
            <p className="ava">🍳Available Balance</p>
            <p className="ms-3">$1,000,000</p>
          </div>
          <div className="text-light">
            <p className="omo"> Transaction...n History {">"}</p>
            <FlutterWaveButton className="flut" {...fwConfig} />
          </div>
          {/* style={{border:'none', borderRadius:'20% 0 20% 0', padding:'3px', bottom:'50px'}} */}
          {/* <h1>Hello Test user</h1>
            <FlutterWaveButton {...fwConfig}/> */}
        </div>
      </nav>

      <div className="mainDiv" style={{ display: "flex", justifyContent: "space-between", padding: "20px", margin: "20px 4% 0 4%", backgroundColor: "#ece8d9", marginTop: "20px", borderRadius: "12px" }} >
        <div
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
          }}
        >
          <RiPassPendingFill />
          <p>Airtime</p>
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
          }}
        >
          <MdOutlineLtePlusMobiledata />
          <p>Data</p>
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
          }}
        >
          <MdOutlineElectricalServices />
          <p>Electricity</p>
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
          }}
        >
          <PiTelevisionBold />
          <p>TV</p>
        </div>
      </div>


      <div className="mainDiv" style={{ display: "flex", justifyContent: "space-between", padding: "20px", margin: "20px 4% 0 4%", backgroundColor: "#ece8d9", marginTop: "20px", borderRadius: "12px" }} >
        <div
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
          }}
        >
          <MdOutlineSportsFootball />
          <p>Betting</p>
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
          }}
        >
          <MdCardTravel />
          <p>Travel</p>
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
          }}
        >
          <MdOutlineShoppingCart />
          <p>Shopping</p>
        </div>
        <Link to="/dashboard/setting"
          style={{
            backgroundColor: "black",
            color: "aliceblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "23%",
            height: "120px",
            borderRadius: "11px",
            fontSize: "25px",
            gap: "5px",
            textDecoration: "none"
          }}
        >
          <IoMdSettings />
          <p>Setting</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
