import axios from "axios";

const baseUrl = "https://todolist-api.hexschool.io";

export async function signUp(signUpEmail, signUpPwd, nickName) {
  try {
    const { data } = await axios.post(`${baseUrl}/users/sign_up`,
      { 
        "email": signUpEmail,
        "password": signUpPwd,
        "nickname": nickName
      }
    );
    return data.data;

  } catch (error) {
    throw error;
  }
}