import { Eye, EyeOff, Linkedin } from "lucide-react";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordConditions from "../components/PasswordConditions";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(formData);

  const [valid, setValid] = useState({
    lengthreg: false,
    lowercase: false,
    uppercase: false,
    special: false,
    number: false,
  });

  // const navigate = useNavigate();

  const validatePasswords = useCallback(
    (passwords) => {
      const lengthRegExp = /^.{8,50}$/;
      const lowercaseRegExp = /[a-z]/;
      const uppercaseRegExp = /[A-Z]/;
      const specialRegExp = /[!@#$%^&*(),.?":{}|<>]/;
      const numberRegExp = /\d/;

      setValid({
        lengthreg: lengthRegExp.test(passwords),
        lowercase: lowercaseRegExp.test(passwords),
        uppercase: uppercaseRegExp.test(passwords),
        special: specialRegExp.test(passwords),
        number: numberRegExp.test(passwords),
      });
    },
    []
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please enter the required fields");
      return;
    }
    if (
      !valid.lengthreg ||
      !valid.lowercase ||
      !valid.uppercase ||
      !valid.special ||
      !valid.number
    ) {
      toast.warn("Please check password validitions");
      return;
    }
  };

  return (
    <>
      <div className="w-full min-h-screen h-full flex justify-center ">
        <div className="w-full sm:w-96 lg:w-5/12 xl:w-4/12 p-4 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full 2xl:w-96">
            <div className=" rounded-lg p-4 w-full">
              <h1 className="text-2xl font-bold">Create an account</h1>
              <p className="text-sm">
                Enter your email below to create your account
              </p>
              <div className="mt-4">
                <h1 className="text-sm">Name</h1>
                <input
                  onChange={(e) =>
                    setFormData((prevSate) => ({
                      ...prevSate,
                      name: e.target.value,
                    }))
                  }
                  required
                  id="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="outline-none border border-black p-2 font-semibold text-sm w-full rounded-md mt-1 placeholder:font-normal"
                />
                <h1 className="text-sm mt-2">Email</h1>
                <input
                  onChange={(e) =>
                    setFormData((prevSate) => ({
                      ...prevSate,
                      email: e.target.value,
                    }))
                  }
                  required
                  name="email"
                  id="Email"
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none border border-black p-2 font-semibold text-sm w-full rounded-md mt-1 placeholder:font-normal"
                />
                <h1 className="text-sm mt-2">Password</h1>
                <div className="border border-black p-2 mt-1 rounded-md w-full h-10 flex justify-center items-center ">
                  <input
                    onChange={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                      }));
                      validatePasswords(e.target.value);
                    }}
                    required
                    name="password"
                    id="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="outline-none font-semibold text-sm w-full placeholder:font-normal"
                  />
                  <button
                    aria-label="eye"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
                {/* Password Condetions */}
                <PasswordConditions valid={valid} />
                <div className="w-full h-10 mt-6">
                  <button
                    type="submit"
                    className="border border-black bg-black text-white rounded-md w-full h-full text-sm"
                  >
                    Create Account
                  </button>
                </div>
                <div className="w-full text-center mt-1">
                  <span className="text-sm">
                    Already have an account? please
                    <Link
                      to="/"
                      className="ml-1 underline text-blue-600 font-semibold"
                    >
                      login
                    </Link>
                  </span>
                </div>
                <div className="flex items-center gap-4 w-full py-6">
                  <span className="border-t border-black w-full"></span>
                  <span className="text-sm font-bold">OR</span>
                  <span className="border-t border-black w-full"></span>
                </div>
                <div className="border border-blue-500 w-full h-10 flex justify-center items-center rounded-md">
                  <Linkedin className="text-blue-500" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden lg:block w-8/12 min-h-screen bg-black h-full text-white"></div>
      </div>
    </>
  );
};

export default SignUp;
