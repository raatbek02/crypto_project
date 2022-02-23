import { $host } from ".";

export const registration = async (email, username, password) => {
  const { data } = await $host.post("api/auth/users/", {
    username,
    email,
    password,
   //  role: "ADMIN",
  });

  localStorage.setItem("token", JSON.stringify(data.token));
  return data.token;
};

export const login = async (password, username) => {
  const { data } = await $host.post("api/auth/token/login/", {
    username,
    password,
  });
  localStorage.setItem("token", JSON.stringify(data.token));
  return data.token;
};
