import * as axios from "axios";

const userCredentials = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "63da3da8-9a85-4a6d-8fd2-ba2eb164b24f",
  },
});

export const userAPI = {
  sendLoginRequest() {
    return userCredentials.get(`auth/me`).then((response) => {
      return response.data;
    });
  },

  getUsers(currentPage = 1, itemsPerPage = 10) {
    return userCredentials
      .get(`users?page=${currentPage}&count=${itemsPerPage}`)
      .then((response) => {
        return response.data;
      });
  },

  setFollow(userId) {
    return userCredentials.post(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  setUnFollow(userId) {
    return userCredentials.delete(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  openUserProfile(userId) {
    return userCredentials.get(`/profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};
