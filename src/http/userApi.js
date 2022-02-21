import { $host } from ".";

export const registration = async (username, email, password) => {
  const { data } = await $host.post("api/auth/register", {
    username,
    email,
    password,
    role: "ADMIN",
  });

  localStorage.setItem("token", JSON.stringify(data.token));
  return data.token;
};

export const login = async (username, password) => {
  const { data } = await $host.post("api/auth/login", {
    username,
    password,
  });
  localStorage.setItem("token", JSON.stringify(data.token));
  return data.token;
};
