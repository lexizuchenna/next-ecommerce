"use client";

import axios from "axios";

const BASEURL = axios.create({ baseURL: `/api/` });

export const loginUser = async (formData) => {
  try {
    const { data } = await BASEURL.post("auth/login", formData);

    if (data) {
      typeof window !== "undefined" &&
        localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    const message = error?.response?.data || error.message;
    throw new Error(message);
  }
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

const actions = {
  loginUser,
  logoutUser,
};

export default actions;
