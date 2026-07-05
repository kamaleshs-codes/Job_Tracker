import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(formData.email, formData.password);
    if (result.success) {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-3xl font-bold text-center mb-6'>Login</h2>

        <form className='space-y-5' onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className='block mb-2 font-medium'>Email</label>

            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block mb-2 font-medium'>Password</label>

            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Login Button */}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition'>
            Login
          </button>

          <p className='text-center text-gray-600'>
            Don't have an account?{" "}
            <Link to='/register' className='text-blue-600 hover:underline'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
