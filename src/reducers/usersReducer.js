import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_LOADING = "IS_LOADING";
const IS_FETCHING = "IS_FETCHING";

let initialState = {
  users: [],
  itemsPerPage: 10,
  usersTotalCount: 0,
  currentPage: 1,
  isFetching: false,
  isLoadingStack: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          } else {
            return user;
          }
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.number,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        usersTotalCount: action.number,
      };
    }

    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoadingStack: action.isLoading
          ? [...state.isLoadingStack, action.userId]
          : state.isLoadingStack.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const followToggle = (userId) => ({
  type: FOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (number) => ({
  type: SET_CURRENT_PAGE,
  number,
});

export const setTotalUsersCount = (number) => ({
  type: SET_TOTAL_USERS_COUNT,
  number,
});

export const isFetchingIndicate = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});

export const isLoadingIndicate = (userId, isLoading) => ({
  type: IS_LOADING,
  userId,
  isLoading,
});

// THUNKs

export const getUsers = (currentPage, itemsPerPage) => {
  return (dispatch) => {
    dispatch(isFetchingIndicate(true));

    userAPI.getUsers(currentPage, itemsPerPage).then((response) => {
      dispatch(setUsers(response.items));
      dispatch(setCurrentPage(currentPage));
      dispatch(setTotalUsersCount(response.totalCount));
      dispatch(isFetchingIndicate(false));
    });
  };
};

export const followUserToggle = (user) => {
  return (dispatch) => {
    dispatch(isLoadingIndicate(user.id, true));

    if (user.followed === false) {
      userAPI.setFollow(user.id).then((response) => {
        if (response.resultCode === 0) {
          dispatch(followToggle(user.id));
          dispatch(isLoadingIndicate(user.id, false));
        }
      });
    } else {
      userAPI.setUnFollow(user.id).then((response) => {
        if (response.resultCode === 0) {
          dispatch(followToggle(user.id));
          dispatch(isLoadingIndicate(user.id, false));
        }
      });
    }
  };
};

export default usersReducer;
