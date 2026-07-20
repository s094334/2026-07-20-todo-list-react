import { useForm } from "react-hook-form"
import Aside from "../login/Aside"

function Register () {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  
  return (
    <section id="signUpPage" className="bg-[#FFD370]">
      <div className="mx-auto h-screen flex flex-col justify-between items-center w-full px-[31px] py-12 md:flex-row md:w-[800px] md:px-8 md:py-[87px]">
        <Aside />
        <div>
          <form className="flex flex-col ml-0 md:ml-[100px]" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-bold mb-6 text-xl text-center md:text-2xl md:text-left">
              註冊帳號
            </h2>
            <label className="text-sm font-bold mt-4 mb-1" htmlFor="sign-up-email">
              Email
            </label>
            <input
              className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
              type="text"
              id="sign-up-email"
              name="email"
              placeholder="請輸入 email"
              required=""
            />
            <label className="text-sm font-bold mt-4 mb-1" htmlFor="name">
              您的暱稱
            </label>
            <input
              className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
              type="text"
              name="name"
              id="name"
              placeholder="請輸入您的暱稱"
              required=""
            />
            <label className="text-sm font-bold mt-4 mb-1" htmlFor="sign-up-pwd">
              密碼
            </label>
            <input
              className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
              type="password"
              name="pwd"
              id="sign-up-pwd"
              placeholder="請輸入密碼"
              required=""
            />
            <label className="text-sm font-bold mt-4 mb-1" htmlFor="sign-up-pwd2">
              再次輸入密碼
            </label>
            <input
              className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
              type="password"
              name="pwd2"
              id="sign-up-pwd2"
              placeholder="請再次輸入密碼"
              required=""
            />
            <input
              className="w-32 h-12 rounded-[10px] bg-[#333] text-white self-center my-6 font-bold cursor-pointer text-center text-base"
              type="button"
              defaultValue="註冊帳號"
            />
            <a
              className="block text-[#333] font-bold no-underline text-center"
              href="#loginPage"
            >
              登入
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register;
