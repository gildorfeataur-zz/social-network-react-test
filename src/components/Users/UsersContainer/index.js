import React from "react";
import { connect } from "react-redux";
import {
  followUserToggle,
  setCurrentPage,
  isLoadingIndicate,
  getUsers,
} from "../../../reducers/usersReducer";
import UsersList from "../UsersList";
import { compose } from "redux";
import withLoginRedirect from "../../../hoc/withLoginRedirect";

function UsersContainer({ data, getUsers, followUserToggle }) {
  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handlePageChange = (page) => {
    getUsers(page);
  };

  const handleChangeFollowing = (user) => {
    followUserToggle(user);
  };

  return (
    <UsersList
      data={data}
      changeFollowing={handleChangeFollowing}
      changePage={handlePageChange}
    />
  );
}

let mapStateToProps = (state) => {
  return { data: state.usersPage };
};

export default compose(
  withLoginRedirect,
  connect(mapStateToProps, {
    followUserToggle,
    setCurrentPage,
    isLoadingIndicate,
    getUsers,
  })
)(UsersContainer);
