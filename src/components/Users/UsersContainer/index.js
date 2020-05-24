import React from "react";
import { connect } from "react-redux";
import {
  followUserToggle,
  setCurrentPage,
  isLoadingIndicate,
  getUsers,
} from "../../../reducers/usersReducer";
import UsersList from "../UsersList";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.data.currentPage,
      this.props.data.itemsPerPage
    );
  }

  handlePageChange = (page) => {
    this.props.getUsers(page, this.props.data.itemsPerPage);
  };

  handleChangeFollowing = (user) => {
    this.props.followUserToggle(user);
  };

  render() {
    return (
      <UsersList
        data={this.props.data}
        changeFollowing={this.handleChangeFollowing}
        changePage={this.handlePageChange}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return { data: state.usersPage };
};

export default connect(mapStateToProps, {
  followUserToggle,
  setCurrentPage,
  isLoadingIndicate,
  getUsers,
})(UsersContainer);
