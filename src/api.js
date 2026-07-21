import axios from "axios";

export const baseUrl = "https://todolist-api.hexschool.io";

export async function getTodos(token) {
  try {
    const response = await axios.get(`${baseUrl}/todos/`,{
      headers: {
        Authorization: token,
      },
    })
    const data = response.data;
    return data;

  } catch (error) {
    console.log(error)
  }
}