import GetTodo from "./Create"

const baseUrl = 'https://todolist-api.hexschool.io';

function Todolist () {
  return (
    <section
      id="todoListPage"
      className="bg-[linear-gradient(175deg,#FFD370_100%,#fff_0%)] md:bg-[linear-gradient(175deg,#FFD370_60%,#fff_40%)]"
    >
      <nav className="flex justify-between px-8 pt-6 mb-4 md:mb-0">
        <h1>
          <a
            href="#"
            className="block w-[243px] h-[39px] bg-[url(https://upload.cc/i1/2022/03/23/8vTzYG.png)] bg-no-repeat indent-[101%] overflow-hidden whitespace-nowrap"
          >
            ONLINE TODO LIST
          </a>
        </h1>
        <ul className="flex text-base">
          <li className="hidden mt-[11px] md:block md:mt-0">
            <a href="#" className="ml-0 text-[#333] no-underline hover:text-[#d87355] md:ml-6">
              <span className="font-bold" />
            </a>
          </li>
          <li className="mt-[11px] md:mt-0">
            <a
              href="#loginPage"
              className="ml-0 text-[#333] no-underline hover:text-[#d87355] md:ml-6"
            >
              登出
            </a>
          </li>
        </ul>
      </nav>
      <div className="h-screen mx-auto px-8 py-4">
        <div className="w-full mx-auto md:w-[500px]">
          <div className="relative flex w-full mb-4 shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
            <input
              className="relative w-full h-[47px] pl-4 text-base bg-white rounded-[10px]"
              type="text"
              placeholder="請輸入待辦事項"
            />
            <button
              className="absolute top-1 right-1 block w-10 h-[39px] p-[10px] text-center text-[20px] leading-none text-white no-underline bg-[#333] rounded-[10px]"
            >
              +
            </button>
          </div>
          <div className="bg-white rounded-[10px] shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
            <ul className="flex justify-evenly">
              <li className="w-full">
                <button
                  data-tab="all"
                  className="block w-full p-4 font-bold leading-5 text-center no-underline text-[#333] border-b-2 border-[#333]"
                >
                  全部
                </button>
              </li>
              <li className="w-full">
                <button
                  data-tab="pending"
                  className="block w-full p-4 font-bold leading-5 text-center no-underline text-[#9F9A91] border-b-2 border-[#efefef]"
                >
                  待完成
                </button>
              </li>
              <li className="w-full">
                <button
                  data-tab="completed"
                  className="block w-full p-4 font-bold leading-5 text-center no-underline text-[#9F9A91] border-b-2 border-[#efefef]"
                >
                  已完成
                </button>
              </li>
            </ul>
            <div className="pt-[23px] pl-6 pr-[17px] pb-8">
              <ul className="mb-2 overflow-y-auto max-h-[400px]"></ul>
              <div className="flex justify-between">
                <p className="text-sm text-[#333]"> 0 個已完成項目</p>
                <button className="text-sm text-[#9F9A91] no-underline">
                  清除已完成項目
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
};


export default Todolist;