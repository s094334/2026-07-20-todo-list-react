const baseUrl = "https://todolist-api.hexschool.io";

export async function signUp(signUpEmail, signUpPwd, nickName) {
  try {
    const response = await fetch(`${baseUrl}/users/sign_up`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": signUpEmail,
          "password": signUpPwd,
          "nickname": nickName
        })
      }
    );

    if (!response.ok) {
      const message = response.status === 400 ? '此 email 已被註冊' : '發生未知錯誤';
      alert(message);
      return false;
    }

    const data = await response.json();
    alert('註冊成功，歡迎登入！');
    return true;
  } catch (error) {
    console.log(error.message);
  }
}