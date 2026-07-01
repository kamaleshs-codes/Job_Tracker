const Profile = require("../models/Profile");

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }
    profile.fullName = req.body.fullName;     
    profile.email = req.body.email;     
    profile.about = req.body.about;     
    profile.skills = req.body.skills;     
    profile.experience = req.body.experience;     

    if(req.file){
      profile.resume = req.file.path
    }

    await profile.save();
    res.status(200).json({
      message: "Profile Updated Successfully",
      profile
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getProfile, updateProfile };
