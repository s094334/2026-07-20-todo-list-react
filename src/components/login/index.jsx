import { useForm } from "react-hook-form"
import Aside from "./Aside";
import { Link } from 'react-router'

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <section id="loginPage" className="bg-[#FFD370]">
      <div className="mx-auto h-screen flex flex-col items-center justify-start w-full px-[31px] py-12 sm:flex-row sm:justify-between sm:w-[800px] sm:px-8 sm:py-[87px]">
        { <Aside /> }
        <div>
          <form className="flex flex-col ml-0 sm:ml-[100px]" action="index.html">
            <h2 className="font-bold mb-6 text-xl text-center sm:text-2xl sm:text-left">
              最實用的線上待辦事項服務
            </h2>
            <label className="text-sm font-bold mt-4 mb-1" htmlFor="sign-in-email">
              Email
            </label>
            <input
              className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
              type="text"
              id="sign-in-email"
              name="email"
              placeholder="請輸入 email"
              required=""
            />
            <span id="email-error" className="mt-1 mb-4 text-[#d87355] text-sm" />
            <label className="text-sm font-bold mt-4 mb-1" htmlFor="sign-in-pwd">
              密碼
            </label>
            <input
              className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
              type="password"
              name="pwd"
              id="sign-in-pwd"
              placeholder="請輸入密碼"
              required=""
            />
            <span id="pwd-error" className="mt-1 mb-4 text-[#d87355] text-sm" />
            <input
              className="w-32 h-12 rounded-[10px] bg-[#333] text-white self-center my-6 font-bold cursor-pointer text-center text-base"
              type="button"
              defaultValue="登入"
            />
            <Link
              to='/register'
              className="block text-[#333] font-bold no-underline text-center"
            >
              註冊帳號
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;
