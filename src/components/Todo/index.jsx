import { useState, useEffect } from "react";
import Nav from "./Nav"
import AddTodoBtn from "./AddBtn";
import { filterTabs } from './data'
import FilterTodoBtn from "./FilterBtn";
import { baseUrl, getTodos } from "../../api";

function Todolist () {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos(token);
      console.log(data)
      setTodos(data)
    };

    fetchTodos();
  }, [])

  return (
    <section
      id="todoListPage"
      className="bg-[linear-gradient(175deg,#FFD370_100%,#fff_0%)] md:bg-[linear-gradient(175deg,#FFD370_60%,#fff_40%)]"
    >
      <Nav />
      <div className="h-screen mx-auto px-8 py-4">
        <div className="w-full mx-auto md:w-[500px]">
          <AddTodoBtn />
          <div className="bg-white rounded-[10px] shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
            <ul className="flex justify-evenly">
              {
                filterTabs.map((filterTab) => {
                  return <FilterTodoBtn key={ filterTab.dataTab } {...filterTab}/>
                })
              }
            </ul>
            <div className="pt-[23px] pl-6 pr-[17px] pb-8">
              <ul className="mb-2 overflow-y-auto max-h-[400px]">
              </ul>
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