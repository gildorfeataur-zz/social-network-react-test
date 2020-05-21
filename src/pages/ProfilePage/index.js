import React from "react";
import PageLayout from "../../components/PageLayout";
import ProfileContainer from "../../components/Profile/ProfileContainer";

function ProfilePage() {
  return (
    <PageLayout>
      <h1>Profile</h1>
      <ProfileContainer />
    </PageLayout>
  );
}

export default ProfilePage;
