import request from "./request";

const getUser = (user) => request(`https://api.github.com/users/q`);

export {getUser};
