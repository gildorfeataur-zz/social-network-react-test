import React from "react";
import PageLayout from "../../components/PageLayout";
import MyProfileContainer from "../../components/Profile/MyProfileContainer";

function ProfilePage() {
  return (
    <PageLayout>
      <h1>My Profile</h1>
      <MyProfileContainer />
    </PageLayout>
  );
}

export default ProfilePage;
