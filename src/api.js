import axios from "axios";

const baseUrl = "https://todolist-api.hexschool.io";

export async function getTodos() {
  try {
    const { data } = await axios.get(`${baseUrl}/todos/`,{
      headers: {
        Authorization: token,
      },
    })
    return data.data;

  } catch (error) {
    console.log(error.response?.data)
  }
}

export async function addTodo(content) {
  try {
    const { data } = await axios.post(`${baseUrl}/todos/`,
      { content },
      {
        headers: {
          Authorization: token,
        }
      }
    );
    return data.newTodo;

  } catch (error) {
    console.log(error.response?.data);
  }
}


export async function deleteTodo(id) {
  try {
    const { data } = await axios.delete(`${baseUrl}/todos/${id}`,
      {
        headers: {
          Authorization: token,
        }
      }
    );
    
  } catch (error) {
    console.log(error.response?.data);
  }
}