import React from "react";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import ProfileContainer from "../../components/Profile/ProfileContainer";

function ProfilePage() {
  return (
    <PageLayout header={<Header />}>
      <h1>Profile</h1>
      <ProfileContainer />
    </PageLayout>
  );
}

export default ProfilePage;
