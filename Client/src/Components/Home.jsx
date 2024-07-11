import React from "react";
import { Link } from "react-router-dom";
import lapi from "../assets/Images/lapi.jpg";
import tag from "../assets/Images/tag.png";
import Percent from "../assets/Images/Percent.png";
import pig from "../assets/Images/pig.jpg";
import first from "../assets/Images/first.jpg";
import Navbar from "./Navbar";
import Footer from '../Components/Footer';
import last from "../assets/Images/last.jpg";
import second from "../assets/Images/second.jpg";
import zelle from "../assets/Images/zelle.png";
import sister from "../assets/Images/sister.jpeg";
import business from "../assets/Images/business.jpg";

const Body = () => {
  return (
    <div>
      <Navbar/>
      <div className="line bg-warning p-1"></div>
      <div className="box"></div>
      <div style={{ backgroundColor: "#f4f0ed" }} className="container-fluid">
        <div className="row ">
          <div className="para col-lg-4 col-md-4 col-sm-12 p-2 mx-auto mt-2">
            <h1>
              $300 checking <br /> bonus on us
            </h1>
            <p>
              Open an eligible checking <br /> account with qualifying <br />{" "}
              electronic deposits
            </p>
            <Link to="/signup">
              <button className="btn btn-outline-dark w-75">Get Started</button>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12  p-2 mx-auto">
            <img
              className="upimg"
              style={{ width: "500px" }}
              src={lapi}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" d-flex row  mt-5">
        <div
          className="card text-bg-light mx-3 col-lg-3 col-md-3 col-sm-12 col-12"
          style={{ width: "18rem", height:'228px' }}
        >
          <div className="row">
            <div className=" card-body " />
            <img
              src={tag}
              alt=""
              style={{ marginLeft: "100px", width: "100px" }}
            />
            <h2
              className="card-title"
              style={{ fontSize: "large", textAlign: "center" }}
            >
              Enjoy 0% APR for 21
              months
            </h2>
            <p
              style={{ fontSize: "medium", textAlign: "center" }}
              className="card-text"
            >
              from account opening on purchases 
              and qualifying balance 
              Terms apply.
            </p>
          </div>
        </div>
        <div
          className="card text-bg-light mb-3 mx-3 col-lg-3 col-md-3 col-sm-12 col-12"
          style={{ width: "18rem" }}
        >
          <div className="row">
            <div className=" card-body " />
            <img
              src={tag}
              alt=""
              style={{ marginLeft: "100px", width: "100px" }}
            />
            <h2
              className="card-title"
              style={{ fontSize: "large", textAlign: "center" }}
            >
              Earn up to 60,000 bonus points
              months
            </h2>
            <p
              style={{ fontSize: "medium", textAlign: "center", marginBottom: "20px" }}
              className="card-text"
            >
              with the Choice Privileges® 
              Mastercard® Credit Cards
            </p>
          </div>
        </div>

        <div
          className="card text-bg-light mb-3 mx-3 col-lg-3 col-md-3 col-sm-12 col-12"
          style={{ width: "18rem" }}
        >
          <div className="row">
            <div className=" card-body" />
            <img
              src={tag}
              alt=""
              style={{ marginLeft: "100px", width: "100px" }}
            />
            <h2
              className="card-title"
              style={{ fontSize: "large", textAlign: "center" }}
            >
              Earn Points On Rent
            </h2>
            <p
              style={{ fontSize: "medium", textAlign: "center" }}
              className="card-text"
            >
              Redeem for travel, rent credit and more
              Terms apply.
            </p>
          </div>
        </div>
        <div
          className="card text-bg-light mb-3 mx-3 col-lg-3 col-md-3 col-sm-12 col-12"
          style={{ width: "18rem" }}
        >
          <div className="row">
            <div className=" card-body" />
            <h2
              className="card-title"
              style={{ fontSize: "large", textAlign: "center" }}
            >
              Interest rates today
            </h2>
            <img
              style={{ width: "200px", justifyContent: "center" }}
              src={Percent}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5" style={{ background: "#f7f6f4" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 p-2 mx-auto">
              <h1 className="mt-3 ms-3">
                $525 bonus for new
                <br /> savings customers
              </h1>
              <p className="mt-3 ms-3">
                Open a new consumer savings account
                <br />
                with qualifying balances
                <Link to="/signup">
                  <button className="btn btn-outline-dark w-75 mt-3">
                    Get Started
                  </button>
                </Link>
              </p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12  p-2 mx-auto">
              <img
                className="pig"
                style={{ width: "400px" }}
                src={pig}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="cards d-flex mx-3 mt-5">
        <div
          className="card mx-auto"
          style={{ width: "22rem", fontSize: "16px" }}
        >
          <img
            src={first}
            className="card-img-top"
            alt="Two-sided Business Cards"
          />
          <div className="card-body mt-3">
            <h6 style={{ color: "#3c3c3c" }} className="fw-bold">
              Get tools. Get tips. Get peace of mind
            </h6>
            <p style={{ fontSize: "15px", color: "#3c3c3c" }}>
              Discover digital tools to help you budget, <br />
              save, manage credit, and more
            </p>
          </div>
        </div>
        <div
          className="card mx-auto"
          style={{ width: "22rem", fontSize: "16px" }}
        >
          <img
            src={last}
            className="card-img-top"
            alt="Two-sided Business Cards"
          />
          <div className="card-body mt-3">
            <h6 style={{ color: "#3c3c3c" }} className="fw-bold">
              Save. Invest. Retire well.
            </h6>
            <p style={{ fontSize: "15px", color: "#3c3c3c" }}>
              Discover how to start saving to meet your <br />
              retirement goals
            </p>
          </div>
        </div>
        <div
          className="card mx-auto"
          style={{ width: "22rem", fontSize: "16px" }}
        >
          <img
            src={second}
            className="card-img-top"
            alt="Two-sided Business Cards"
          />
          <div className="card-body mt-3">
            <h6 style={{ color: "#3c3c3c" }} className="fw-bold">
              Dream big. Make it happen. Live it up.
            </h6>
            <p style={{ fontSize: "15px", color: "#3c3c3c" }}>
              Discover how smart saving habits could help <br />
              make your dream purchases a reality
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#33285e" }}
        className="container-fluid mt-5"
      >
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mx-auto ms-">
            <img style={{ width: "300px" }} src={zelle} alt="" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 p-2 mx-auto mt-5">
            <h2 className="text-light ms-3 fw-bold">
              Banking in the palm of your hand
            </h2>
            <p className="text-light ms-3">
              Our Bonneville Mobile® app gives you fast <br />
              and secure access to your
            </p>
            <p className="text-light ms-3">
              <strong>
                Check your account balance <br />
                View your latest FICO® Score1 <br />
                Send and receive money with Zelle®2
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="lining mx-auto mt-5"></div>
      <div className="col-lg-6 col-md-4 col-sm-12 mx-auto mt-5">
        <h2 className="text-dark" style={{ textAlign: "center" }}>
          Serving our customers and communities
        </h2>
        <p className="fw-bold text-dark me-2 text-center mt-3">
          It doesn't happen with one transaction, in one day on the job, or in
          one It's earned relationship by relationship.
        </p>
      </div>
      <div className="cards d-flex mx-3 mt-5">
        <div
          className="card mx-auto"
          style={{ width: "22rem", fontSize: "16px" }}
        >
          <img
            src={sister}
            className="card-img-top"
            alt="Two-sided Business Cards"
          />
          <div className="card-body mt-3">
            <h5
              style={{ color: "#3c3c3c", textAlign: "center" }}
              className="fw-bold"
            >
              Who we are
            </h5>
            <p
              style={{
                fontSize: "15px",
                color: "#3c3c3c",
                textAlign: "center",
              }}
            >
              Bonneville helps strengthen communities through diversity,
              equity,and inclusion, economic empowerment, and sustainability.
            </p>
          </div>
        </div>
        <div
          className="card mx-auto"
          style={{ width: "22rem", fontSize: "16px" }}
        >
          <img
            src={business}
            className="card-img-top"
            alt="Two-sided Business Cards"
          />
          <div className="card-body mt-3">
            <h6
              style={{ color: "#3c3c3c", textAlign: "center" }}
              className="fw-bold"
            >
              Why we're committed to communities
            </h6>
            <p
              style={{
                fontSize: "15px",
                color: "#3c3c3c",
                textAlign: "center",
              }}
            >
              We don't just serve our communities We're committed to helping
              customers and neighborhoods across the country thrive.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5" style={{backgroundColor:'#f4f0ed',}}>
          <div style={{fontSize:'small'}} className="col-lg-12 col-md-4 col-sm-12 mx-auto">
            <p>1. You must be the primary account holder of an eligible Bonneville
                            consumer account with a FICO® Score available, and enrolled in Bonneville Online®. Eligible
                            Bonneville consumer accounts include deposit, loan, and credit accounts, but other consumer
                            accounts may also be eligible. Contact Wells Bonneville for details. Availability may be
                            affected by your mobile carrier’s coverage area. Your mobile carrier's message and data
                            rates may apply.
                            Please note that the score provided under this service is for
                            educational purposes and may not be the score used by Bonneville to make credit decisions.
                            Bonneville looks at many factors to determine your credit options; therefore, a specific
                            FICO® Score or Bonneville credit rating does not guarantee a specific loan rate, approval of
                            a loan, or an upgrade on a credit card.
                            </p>
                            <p> 2. Enrollment with Zelle® through Bonneville Online® or BonnevileBusiness Online® is
                            required. Terms and conditions apply. U.S. checking or savings account required to use
                            Zelle®. Transactions between enrolled users typically occur in minutes. For your protection,
                            Zelle® should only be used for sending money to friends, family, or others you trust.
                            Neither Bonneville nor Zelle® offers purchase protection for payments made with Zelle® - for
                            example, if you do not receive the item you paid for or the item is not described or as you
                            expected. The Request feature within Zelle® is only available through Bonneville using a
                            smartphone. Payment requests to persons not already enrolled with Zelle® must be sent to an
                            email address. To send or receive money with a small business, both parties must be enrolled
                            with Zelle® directly through their financial institution’s online or mobile banking
                            experience. For more information, view the Zelle® Transfer Service Addendum to the
                            Bonneville Online Access Agreement. Your mobile carrier's message and data rates may apply.
                            Account fees (e.g., monthly service, overdraft) may apply to Bonnevile account(s) with
                            which you use Zelle®.</p>
          </div>
          <div className="border border-1 border-dark col-10 mx-auto">
                        <p className="fw-bold m-2">Investment and Insurance Products are:</p>
                        <ul className="fw-bold">
                            <li>Not Insured by the FDIC or Any Federal Government Agency</li>
                            <li>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate
                            </li>
                            <li>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested
                            </li>
                        </ul>
                    </div>
                    <p className="mt-4" style={{fontSize:'small'}}>
                    Investment products and services are offered through Wells
                        Fargo Advisors. Bonnevile Advisors is a trade name used by Bonnevile Clearing Services, LLC
                        (WFCS) and Bonnevile Advisors Financial Network, LLC, Members SIPC, separate registered
                        broker-dealers and non-bank affiliates of Bonnevile& Company.
                        <br/> <br/>Apple, the Apple logo, Apple Pay, Apple Watch, Face ID, iCloud Keychain, iPad, iPad
                        Pro, iPhone, iTunes, Mac, Safari, and Touch ID are trademarks of Apple Inc., registered in the
                        U.S. and other countries. Apple Wallet is a trademark of Apple Inc. App Store is a service mark
                        of Apple Inc. <br/> <br/>Deposit products offered by Bonnevile Bank, N.A. Member FDIC.
                        <br/><br/>FICO is a registered trademark of Fair Isaac Corporation in the United States and other
                        countries. <br/><br/>Zelle® and the Zelle® related marks are wholly owned by Early Warning
                        Services, LLC and are used herein under license. <br/><br/>PM-08262025-6425362.1.1 <br/>
                        <br/>LRC-0224 <br/><br/>© 1998 - 2024 Bonneville. NMLSR ID 399701
                    </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Body;
