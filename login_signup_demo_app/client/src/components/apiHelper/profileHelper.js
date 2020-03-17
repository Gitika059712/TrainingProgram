import axios from "axios";
export const findUserProfile = (params, credentials) => {
  return fetch("http://localhost:3001/api/users/" + params.userId, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.error(err));
};

export const deleteUser = (params, credentials) => {
  return axios
    .delete(`http://localhost:3001/api/users/${params.userId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t
      }
    })
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};

export const signout = () => {
  return fetch("http://localhost:3001/auth/signout/", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
export const fetchHotelData = () => {
  return fetch("http://localhost:3001/api/hoteldata")
    .then(res => res.json())
    .then(hoteldatares => {
      return hoteldatares;
    })
    .catch(err => console.log(err));
};
export const findHotelManagerProfile = params => {
  return fetch("http://localhost:3001/api/hoteldata/" + params._id)
    .then(response => {
      return response.json();
    })
    .catch(err => console.error(err));
};
export const deleteHotelData = userId => {
  console.log(userId);
  return axios
    .delete(`http://localhost:3001/api/hoteldata/${userId._id}`)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};
