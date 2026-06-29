import { useState, useEffect } from "react";
import axios from "axios";

const ProfileCard = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    about: "",
    skills: "",
    experience: "",
    resume: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async (req, res) => {
    try {
      const res = await axios.get("http://localhost:5000/api/profile");
      if (res.data) {
        setProfile(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeChange = (e) => {
    setProfile({
      ...profile,
      resume: profile.resume.name,
    });
    console.log(profile.resume);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/api/profile", profile);
      alert("Profile Updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8'>
      <h2 className='text-3xl font-bold mb-8'>My Profile</h2>

      {/* Avatar */}
      <div className='flex justify-center mb-8'>
        <div className='w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-5xl'>
          👤
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className='mb-5'>
          <label className='block font-medium mb-2'>Full Name</label>

          <input
            type='text'
            placeholder='Enter your full name'
            name='fullName'
            value={profile.fullName}
            onChange={handleChange}
            className='w-full border rounded-lg p-3'
          />
        </div>

        {/* Email */}
        <div className='mb-5'>
          <label className='block font-medium mb-2'>Email</label>

          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            value={profile.email}
            onChange={handleChange}
            className='w-full border rounded-lg p-3'
          />
        </div>

        {/* About */}
        <div className='mb-5'>
          <label className='block font-medium mb-2'>About</label>

          <textarea
            rows='4'
            name='about'
            value={profile.about}
            onChange={handleChange}
            placeholder='Tell something about yourself'
            className='w-full border rounded-lg p-3'
          />
        </div>

        {/* Skills */}
        <div className='mb-5'>
          <label className='block font-medium mb-2'>Skills</label>

          <input
            type='text'
            name='skills'
            value={profile.skills}
            onChange={handleChange}
            placeholder='React, Node.js, MongoDB...'
            className='w-full border rounded-lg p-3'
          />
        </div>

        {/* Experience */}
        <div className='mb-5'>
          <label className='block font-medium mb-2'>Experience</label>

          <textarea
            rows='3'
            name='experience'
            value={profile.experience}
            onChange={handleChange}
            placeholder='Describe your experience'
            className='w-full border rounded-lg p-3'
          />
        </div>

        {/* Resume */}
        <div className='mb-8'>
          <label className='block font-medium mb-2'>Resume</label>

          <input
            type='file'
            accept='.pdf'
            className='w-full'
            onChange={handleResumeChange}
          />
          {profile.resume && (
            <p className='text-sm text-gray-600 mt-2'>
              Selected File: {profile.resume.name}
            </p>
          )}
        </div>

        <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg'>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileCard;
