import { useState } from "react";
import {auth} from"../../firebase"
export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="bg-[#FFFFFF] w-[660px] h-[997px] rounded">
        <div className="text-center mt-[50px]">
          <h2 className="text-grey-15">Sign Up</h2>
          <p>Create an account to unlock exclusive features.</p>
        </div>
      </div>
    </div>
  );
}
