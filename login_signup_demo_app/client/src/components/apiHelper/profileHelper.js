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
  return fetch("/api/users/" + params.userId, {
    method: "DELETE",
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
export const signout = () => {
  return fetch("http://localhost:3001/auth/signout/", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
