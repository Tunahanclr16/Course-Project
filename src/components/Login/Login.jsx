import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {auth} from "../../firebase"
import 'react-toastify/dist/ReactToastify.css'
export default function Login() {
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const loginFunc=async(e)=>{
        e.preventDefault();
            setLoginData('')
            try {
                const {email,password}=loginData;
                await signInWithEmailAndPassword(auth,email,password)
                    toast.success("The login process is successfull,you will be directed to the courses page")
                    setTimeout(() => {
                        navigate('/courses')
                    }, 2000);
            } catch (error) {
                    toast.error(error.message)
            }
        }
    const changeFunc=(e)=>{
        const {name,value}=e.target
        setLoginData({...loginData, [name]:value})
    }
  return (
    <div>
      <div className="flex px-2 justify-center mx-auto items-center rounded mt-[50px] ">
        <div className="bg-[#FFFFFF] w-[357px] sm:w-[540px] md:w-[660px] h-[560px] sm:h-[600px] md:h-[650px] rounded-xl">
          <div className="text-center mt-[50px]">
            <h2 className="text-grey-15 md:text-[38px] text-[28px] lgg:text-[48px]">
              Login
            </h2>
            <p className="text-grey-30 text-[14px] sm:text-[16px] mt-2 md:text-lg">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <div className="flex justify-center">
            <form
              action=""
              onSubmit={loginFunc}
              className="flex flex-col  gap-4 mt-[50px]"
            >
              <label className="email" htmlFor="">
                Email
              </label>
              <input
                className="  rounded outline-none md:w-[560px] md:h-[75px] sm:w-[460px] sm:h-[64px] w-auto border-none bg-[#FCFCFD] placeholder-"
                placeholder="Enter Your Email"
                id="email"
                onChange={changeFunc}
                name="email"
                type="email"
                value={loginData.email}
              />
              <label className="password" htmlFor="">
                Password
              </label>
              <input
                className="  rounded outline-none md:w-[560px] md:h-[75px] sm:w-[460px] sm:h-[64px] w-auto border-none bg-[#FCFCFD] placeholder"
                placeholder="Enter Your Password"
                id="password"
                onChange={changeFunc}
                name="password"
                type="password"
                value={loginData.password}
              />
              {/* Rest of your form */}
              <button className="text-[#FFFFFF] bg-orange-50 text-lg w-[297px] h-[49px] sm:w-[460px] md:w-[560px] sm:h-[49px] md:h-[63px] border-none rounded-xl">
                        Login
                  </button>
              <p className="cursor-pointer text-lg font-normal">
              Don’t have an account? 
                <span
                  onClick={() => navigate("/Sign-Up")}
                  className="font-medium hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
