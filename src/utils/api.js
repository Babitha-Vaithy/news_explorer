import { baseUrlPrefix } from "./constants";
import { baseUrlSuffix } from "./constants";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

export function request(url) {
  return fetch(url).then((data) => checkResponse(data));
}

function getSearchData(data) {
  return request(`${baseUrlSuffix}${data}${baseUrlPrefix}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { getSearchData };
