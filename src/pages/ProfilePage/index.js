import React from "react";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfilePostsContainer from "../../components/Profile/ProfilePostsContainer";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";

function ProfilePage() {
  return (
    <PageLayout header={<Header />}>
      <h1>Profile</h1>
      <ProfileInfo />
      <ProfilePostsContainer />
    </PageLayout>
  );
}

export default ProfilePage;
