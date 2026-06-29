import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import DashboardLayout from "../layouts/DashboardLayout";

function Profile() {
  return (
    <DashboardLayout>
      <div className='p-6 bg-gray-100 min-h-screen'>
        <ProfileCard />
      </div>
    </DashboardLayout>
  );
}

export default Profile;
