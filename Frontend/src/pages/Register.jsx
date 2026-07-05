import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await register(
      formData.name,
      formData.email,
      formData.password,
    );

    if (result.success) {
      alert("Registration Successful");
      navigate("/login");
    } else {
      alert(result.message);
    }
  };

  const navigate = useNavigate();

  const { register } = useAuth();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'>
        <h2 className='text-3xl font-bold text-center mb-6'>Register</h2>

        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label className='block mb-2 font-medium'>Name</label>

            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='w-full border rounded-lg p-3'
            />
          </div>

          <div>
            <label className='block mb-2 font-medium'>Email</label>

            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full border rounded-lg p-3'
            />
          </div>

          <div>
            <label className='block mb-2 font-medium'>Password</label>

            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter password'
              className='w-full border rounded-lg p-3'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700'>
            Register
          </button>

          <p className='text-center'>
            Already have an account?{" "}
            <Link to='/login' className='text-blue-600 hover:underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
