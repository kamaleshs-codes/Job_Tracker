import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import DashboardLayout from "../layout/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";

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
