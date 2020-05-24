import React from "react";
import { connect } from "react-redux";
import {
  followToggle,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isFetchingIndicate,
  isLoadingIndicate,
} from "../../../reducers/usersReducer";
import UsersList from "../UsersList";
import { userAPI } from "../../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isFetchingIndicate(true);
    userAPI
      .getUsers(this.props.data.currentPage, this.props.data.itemsPerPage)
      .then((response) => {
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
        this.props.isFetchingIndicate(false);
      });
  }

  handlePageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.isFetchingIndicate(true);

    userAPI.getUsers(page, this.props.data.itemsPerPage).then((response) => {
      this.props.setUsers(response.items);
      this.props.isFetchingIndicate(false);
    });
  };

  handleChangeFollowing = (user) => {
    this.props.isLoadingIndicate(user.id, true);

    if (user.followed === false) {
      userAPI.setFollow(user.id).then((response) => {
        if (response.resultCode === 0) {
          this.props.followToggle(user.id);
          this.props.isLoadingIndicate(user.id, false);
        }
      });
    } else {
      userAPI.setUnFollow(user.id).then((response) => {
        if (response.resultCode === 0) {
          this.props.followToggle(user.id);
          this.props.isLoadingIndicate(user.id, false);
        }
      });
    }
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
  followToggle,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isFetchingIndicate,
  isLoadingIndicate,
})(UsersContainer);
