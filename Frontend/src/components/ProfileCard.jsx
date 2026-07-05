import { useState, useEffect } from "react";
import api from "../api/axios";

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

  const fetchProfile = async () => {
    try {
      const res = await api.get("/profile");

      if (res.data.success && res.data.profile) {
        const data = res.data.profile;

        setProfile({
          fullName: data.fullName || "",
          email: data.email || "",
          about: data.about || "",
          skills: data.skills || "",
          experience: data.experience || "",
          resume: data.resume || "",
        });
      }
    } catch (error) {
      console.log("Error fetching profile:", error);
    }
  };

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResumeChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("fullName", profile.fullName);
      formData.append("email", profile.email);
      formData.append("about", profile.about);
      formData.append("skills", profile.skills);
      formData.append("experience", profile.experience);

      if (profile.resume instanceof File) {
        formData.append("resume", profile.resume);
      }

      await api.put("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile Updated Successfully");

      // Reload latest profile from database
      fetchProfile();
    } catch (error) {
      console.log(error);
      alert("Failed to update profile");
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
            name='fullName'
            value={profile.fullName}
            onChange={handleChange}
            placeholder='Enter your full name'
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Email */}
        <div className='mb-5'>
          <label className='block font-medium mb-2'>Email</label>

          <input
            type='email'
            name='email'
            value={profile.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Resume */}
        <div className='mb-8'>
          <label className='block font-medium mb-2'>Resume (PDF)</label>

          <input
            type='file'
            accept='.pdf'
            onChange={handleResumeChange}
            className='w-full border border-gray-300 rounded-lg p-3'
          />

          {profile.resume && (
            <p className='text-sm text-gray-600 mt-2'>
              Selected File:{" "}
              {profile.resume instanceof File
                ? profile.resume.name
                : profile.resume.split("/").pop()}
            </p>
          )}
        </div>

        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition'>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileCard;
