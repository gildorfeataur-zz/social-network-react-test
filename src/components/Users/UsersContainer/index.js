import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followCreator,
  unFollowCreator,
  setUsersCreator,
  setCurrentPageCreator,
  setTotalUsersCountCreator,
} from "../../../reducers/usersReducer";
import UsersList from "../UsersList";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.data.currentPage}&count=${this.props.data.itemsPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  handlePageChange = (page) => {
    this.props.setCurrentPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.data.itemsPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  handleChangeFollowing = (id) => {
    this.props.handleFollow(id);
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

let mapDispatchToProps = (dispatch) => {
  return {
    handleFollow: (userId) => {
      dispatch(followCreator(userId));
    },

    handleUnFollow: (userId) => {
      dispatch(unFollowCreator(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },

    setCurrentPage: (number) => {
      dispatch(setCurrentPageCreator(number));
    },

    setTotalUsersCount: (number) => {
      dispatch(setTotalUsersCountCreator(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
