const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [],
  itemsPerPage: 7,
  usersTotalCount: 0,
  currentPage: 1,
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

    case UNFOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
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

    default:
      return state;
  }
};

export const followCreator = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unFollowCreator = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersCreator = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPageCreator = (number) => ({
  type: SET_CURRENT_PAGE,
  number,
});

export const setTotalUsersCountCreator = (number) => ({
  type: SET_TOTAL_USERS_COUNT,
  number,
});

export default usersReducer;
