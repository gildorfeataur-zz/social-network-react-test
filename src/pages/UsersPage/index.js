import React from "react";
import PageLayout from "../../components/PageLayout";
import UsersContainer from "../../components/Users/UsersContainer";

function UsersPage() {
  return (
    <PageLayout>
      <h1>Users</h1>
      <UsersContainer />
    </PageLayout>
  );
}

export default UsersPage;
