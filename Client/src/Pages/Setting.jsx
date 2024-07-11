import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const [user, setuser] = useState("")
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
          setuser(res.data.user)
        } else {
          localStorage.removeItem("token");
          navigate("/login");
          console.log(res.status);
          console.log("success");
        }
      });
  }, []);

  const [oldPassword, setoldPassword] = useState("")
  const [newPassword, setnewPassword] = useState("")

  const changePass = () => {
    const url = 'http://localhost:3000/students/change_pass'
        axios.post(url, { email: user.email, oldPassword, newPassword })
        .then((res)=>{
            console.log(res.data)
            toast.success("Password changed successfully")
            setTimeout(() => {
              window.location.reload()
            }, 1500);
        })
        .catch((err) => {
            console.log(err);
            toast.error("Failed to change password")
        })
  }


return (
    <>
        <div className='settings '>
            <h1 className='ms-5'>Change Password</h1>
            <input type="text" onChange={(e)=>{setoldPassword(e.target.value)}} className='form-control w-50 border-1 border-dark my-2'/>
            <input type="text" onChange={(e)=>{setnewPassword(e.target.value)}} className='form-control w-50 border-1 border-dark my-2'/>
            <button onClick={changePass} className='w-50 form-control btn btn-info text-light'>Change password</button>
        </div>
    </>
    )
}

export default Setting