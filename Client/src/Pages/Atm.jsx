import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Atm = () => {
  return (
    <>
    <Navbar/>
    <div className="Parent p-5 col-sm-12 col-md-8 col-lg-6">
      <h1 style={{color:'#3c3c3c', fontSize:'21px', fontWeight:'bold'}} className="firstChild ms-5">ATM and Banking/Locations</h1>
      <h2 style={{color:'#3c3c3c', fontSize:'18px', fontWeight:'bold'}} className="secondChild ms-5 mt-5">Find a Bonnevile location</h2>
      <input className="thirdChild ms-5 w-100 text-center" type="text" placeholder="Enter an address, landmark, Zip code, or city and state" />
      <button className="fourthChild btn btn-dark mt-2 ms-5">Search</button>
    </div>
    <div className="para col-lg-4 col-md-4 col-sm-12 p-2 mx-auto mt-2">
      
    </div>
    <Footer/>
    </>
  )
}

export default Atm