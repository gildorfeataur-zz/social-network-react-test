import * as axios from "axios";

const userCredentials = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "63da3da8-9a85-4a6d-8fd2-ba2eb164b24f",
  },
});

export const userAPI = {
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

  getUserProfile(userId) {
    return userCredentials.get(`/profile/${userId}`).then((response) => {
      return profileAPI.getProfile(userId);
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return userCredentials.get(`/profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  getStatus(userId) {
    return userCredentials.get(`/profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },

  updateStatus(status) {
    return userCredentials.put(`/profile/status`, {
      status: status,
    });
  },

  uploadAvatar(file) {
    let formData = new FormData();
    formData.append("image", file);

    return userCredentials.put(`/profile/photo`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
  },
};

export const authAPI = {
  sendLoginRequest(credentials) {
    return userCredentials.post(`auth/login`, credentials).then((response) => {
      return response.data;
    });
  },

  sendLogoutRequest() {
    return userCredentials.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },

  sendCheckRequest() {
    return userCredentials.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
