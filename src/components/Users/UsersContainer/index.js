import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followToggle,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isFetchingIndicate,
} from "../../../reducers/usersReducer";
import UsersList from "../UsersList";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isFetchingIndicate(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.data.currentPage}&count=${this.props.data.itemsPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.isFetchingIndicate(false);
      });
  }

  handlePageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.isFetchingIndicate(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.data.itemsPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.isFetchingIndicate(false);
      });
  };

  handleChangeFollowing = (id) => {
    this.props.followToggle(id);
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
})(UsersContainer);
