import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import AppLayout from "../layout/AppLayout";

function Profile() {
  return (
    <AppLayout>
      <div className='p-6 bg-gray-100 min-h-screen'>
        <ProfileCard />
      </div>
    </AppLayout>
  );
}

export default Profile;
