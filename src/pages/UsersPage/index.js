import React from "react";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import UsersContainer from "../../components/Users/UsersContainer";

function UsersPage() {
  return (
    <PageLayout header={<Header />}>
      <h1>Users</h1>
      <UsersContainer />
    </PageLayout>
  );
}

export default UsersPage;
