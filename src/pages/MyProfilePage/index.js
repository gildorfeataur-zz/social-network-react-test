import React from "react";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import MyProfileContainer from "../../components/Profile/MyProfileContainer";

function ProfilePage() {
  return (
    <PageLayout header={<Header />}>
      <h1>My Profile</h1>
      <MyProfileContainer />
    </PageLayout>
  );
}

export default ProfilePage;
