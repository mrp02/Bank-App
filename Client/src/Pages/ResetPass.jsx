import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ResetPass = () => {

    const [email, setemail] = useState("")

    const resetPassword = () => {
        const url = 'http://localhost:3000/students/reset_password'
        axios.post(url, { email })
        .then((res)=>{
            console.log(res.data)
            toast.success("Password reset successfully")
            window.location.reload()
        })
        .catch((err) => {
            console.log(err);
            toast.error("Failed to reset password")
        })
    }


  return (
    <>
        <h1>Reset password</h1>
        <div className='mx-auto container'>
            <input type="text" onChange={(e)=>{setemail(e.target.value)}} className='form-control w-25 border-2 border-success my-2' />
            <button onClick={resetPassword} className='w-25 form-control'>Reset</button>
        </div>
    </>
  )
}

export default ResetPass