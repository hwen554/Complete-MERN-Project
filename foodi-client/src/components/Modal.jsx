import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';


const Modal = () => {

  //react hook form
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();

  const {signUpWithGmail,login} = useContext(AuthContext);
  const [errorMessage,setErrorMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  //gooogle login
  const handleLogin =()=>{
        signUpWithGmail().then((result)=>{
            const user = result.user;
            alert("Login successfully")
            navigate
        }).catch((error)=>console.log(error))
  }


  const onSubmit = (data) =>{
    // console.log(data)
    const email = data.email;
    const password = data.password;
    // console.log(email,password)
    login(email,password).then((result)=>{
        const user = result.user;
        alert("Login successfully");
        document.getElementById('my_modal_5').close()
        navigate(from,{replace:true})
    }).catch((error)=>{
        const errorMessage = error.message;
        setErrorMessage("Provide a correct email and password! ")
    })
  }


  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        const userInfor = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axios
          .post("http://localhost:6001/users", userInfor)
          .then((response) => {
            // console.log(response);
            alert("Signin successful!");
            navigate("/");
          });
      })
      .catch((error) => console.log(error));
  };
  return (
      <div>
          <dialog id="my_modal_5"
              className="modal modal-middle sm:modal-middle"
          >
              <div className="modal-box">
                  <div className="modal-action flex flex-col justify-center mt-0">
                      <form className="card-body" method='dialog' onSubmit={handleSubmit(onSubmit)}>
                          <h3 className='fond-bold text-lg'>Please Login</h3>

                          {/* email */}
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input 
                                    type="email" 
                                    placeholder="email" 
                                    className="input input-bordered" 
                                    required 
                                    {...register("email")}   
                               />
                          </div>

                          {/* password */}
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input 
                                    type="password" 
                                    placeholder="password" 
                                    className="input input-bordered" 
                                    required
                                    {...register("password", { required: true })}
                                />
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                          </div>

                          {/*error*/}
                          
                          {errorMessage ? (
                              <p className="text-red text-xs italic">
                                  {errorMessage}
                              </p>
                          ) : (
                              ""
                          )}

                          {/* login btn */}
                          <div className="form-control mt-6">
                              <input type='submit' value="Login" className="btn bg-green text-white" />
                          </div>

                          <p className='text-center my-2'>Donot have an account? <Link to='/signup' className='underline text-red ml-1'>Signup Now</Link></p>
                          
                          <button htmlFor="my_modal_5" onClick={()=>document.getElementById('my_modal_5').close()} className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                            X
                          </button>
                      </form>
                      

                      {/*social sign in */}
                      <div className='text-center space-x-3 mb-5'>
                          <button
                              onClick={handleLogin}
                              className="btn btn-circle hover:bg-green hover:text-white"
                          >
                              <FaGoogle />
                          </button>
                          <button className="btn btn-circle hover:bg-green hover:text-white">
                              <FaFacebookF />
                          </button>
                          <button className="btn btn-circle hover:bg-green hover:text-white">
                              <FaGithub />
                          </button>
                      </div>
                  </div>
              </div>
          </dialog>
      </div>
  )
}

export default Modal