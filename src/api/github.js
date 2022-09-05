import request from "./request";

const getUser = (user) => request(`https://api.github.com/users/${user}`);
const getUsersSince = (id, perPage) =>
  request(`https://api.github.com/users?since=${id}&per_page=${perPage}`);



  export {getUser};
export {getUsersSince};
