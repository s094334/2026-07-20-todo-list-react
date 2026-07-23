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
  } catch (error) {
      throw error;
    }
}

export async function signIn(signInEmail, signInPwd) {
  try {
    const { data } = await axios.post(`${baseUrl}/users/sign_in`,
      {
        "email": signInEmail,
        "password": signInPwd
      }
    );
    return data;
  } catch (error) {
      throw error;
    }
}

export async function getTodos(config) {
  try {
    const { data } = await axios.get(`${baseUrl}/todos/`,{
      headers: {
        Authorization: token,
      },
      ...config
    })

    return data.data;

  } catch (error) {
    throw error;
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
    throw error;
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
    throw error
  }
}

export async function toggleStatus(id) {
  try {
    const { data } = await axios.patch(`${baseUrl}/todos/${id}/toggle`,
      "",
      {
        headers: {
          Authorization: token,
        }
      }
    );

  } catch(error) {
    throw error
  }
}

export async function editTodo(id, content) {
  try {
    const { data } = await axios.put(`${baseUrl}/todos/${id}`,
      { content },
      {
        headers: {
          Authorization: token,
        }
      }
    );

  } catch(error) {
    throw error
  }
}