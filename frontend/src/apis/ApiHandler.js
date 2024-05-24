import axios from "axios";
import { API_CONSTANTS } from "./ApiConstant";

const AXIOS = axios.create({
  baseURL: API_CONSTANTS.BASE_URL,
});

export const API_HANDLER = {
  async LOGIN(body) {
    try {
      const response = await AXIOS.post(API_CONSTANTS.LOGIN, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response?.statusText !== "OK") {
        throw new Error("Invalid Credintial");
      }

      return response;
    } catch (error) {
      return { error };
    }
  },
  async SIGNUP(body) {
    try {
      const response = await AXIOS.post(API_CONSTANTS.SIGNUP, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status !== 201) {
        throw new Error("Invalid Data");
      }

      return response;
    } catch (error) {
      return { error };
    }
  },

  async ADD_FOOD(body) {
    try {
      const token = localStorage.getItem("token");
      const response = await AXIOS.post(API_CONSTANTS.ADD_FOOD, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (response?.statusText !== "OK" || response?.status === 400) {
        throw new Error("Invalid Data");
      }
      if (response?.status === 403) {
        throw new Error("You don't have rights for these actions..");
      }

      return response;
    } catch (error) {
      return { error };
    }
  },
};
