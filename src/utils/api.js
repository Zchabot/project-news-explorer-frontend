import { baseUrl } from "./constants";

export const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export function request(url, options) {
  return fetch(url, options).then(processResponse);
}

function getItems(token) {
  return request(`${baseUrl}/articles`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function getUserInfo(token) {
  return request(`${baseUrl}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

function addItem(item, token) {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  });
}

function deleteItem(id, token) {
  return request(`${baseUrl}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export { getItems, addItem, deleteItem, getUserInfo };
