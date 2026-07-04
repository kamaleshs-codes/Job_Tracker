const Job = require("../models/job");

const getAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;
    const jobs = await Job.find({ user: userId });

    const analytics = {
      totalJobs: jobs.length,

      pending: jobs.filter((job) => job.status === "Pending").length,
      interview: jobs.filter((job) => job.status === "Interview").length,
      rejected: jobs.filter((job) => job.status === "Rejected").length,
      Offer: jobs.filter((job) => job.status === "Offer").length,
    };
    res.status(200).json({
      success: true,
      analytics,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { getAnalytics };
