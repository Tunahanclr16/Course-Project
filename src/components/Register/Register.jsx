import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 

export default function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const registerFunc = async (e) => {
    e.preventDefault();
    try {
      const { email, password, name } = registerData;
      setRegisterData('')
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name }); 
      toast.success("Registration was successful, you will be directed to the login page")
      setTimeout(() => {
          navigate('/courses')
      }, 2000);
    } catch (error) {
     toast.error(error.message)
    }
  };

  return (
    <div className="flex px-2 justify-center mx-auto items-center rounded mt-[50px] ">
      <ToastContainer/>

      <div className="bg-[#FFFFFF] w-[357px] sm:w-[540px] md:w-[660px] h-[560px] sm:h-[600px] md:h-[750px] rounded-xl">
        <div className="text-center mt-[50px]">
          <h2 className="text-grey-15 md:text-[38px] text-[28px] lgg:text-[48px]">Sign Up</h2>
          <p className="text-grey-30 text-[14px] sm:text-[16px] mt-2 md:text-lg">
            Create an account to unlock exclusive features.
          </p>
        </div>
        <div className="flex justify-center">
          <form
            action=""
            onSubmit={registerFunc}
            className="flex flex-col  gap-4 mt-[50px]"
          >
            <label className="" htmlFor="nane">
              Full Name
            </label>
            <input
              className="  rounded outline-none md:w-[560px] md:h-[75px] sm:w-[460px] sm:h-[64px] w-auto border-none bg-[#FCFCFD] placeholder-"
              placeholder="Enter Your Name"
              id="name"
              onChange={handleChange}
              name="name"
              type="text"
              value={registerData.name}
            />
             <label className="email" htmlFor="">
            Email
            </label>
            <input
              className="  rounded outline-none md:w-[560px] md:h-[75px] sm:w-[460px] sm:h-[64px] w-auto border-none bg-[#FCFCFD] placeholder-"
              placeholder="Enter Your Email"
              id="email"
              onChange={handleChange}
              name="email"
              type="email"
              value={registerData.email}
            />
             <label className="password" htmlFor="">
                Password
            </label>
            <input
              className="  rounded outline-none md:w-[560px] md:h-[75px] sm:w-[460px] sm:h-[64px] w-auto border-none bg-[#FCFCFD] placeholder"
              placeholder="Enter Your Password"
              id="password"
              onChange={handleChange}
              name="password"
              type="password"
              value={registerData.password}
            />
            {/* Rest of your form */}
            <button className="text-[#FFFFFF] bg-orange-50 text-lg w-[297px] h-[49px] sm:w-[460px] md:w-[560px] sm:h-[49px] md:h-[63px] border-none rounded-xl">
              Sign Up
            </button>
            <p className="cursor-pointer text-lg font-normal">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="font-medium hover:underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
