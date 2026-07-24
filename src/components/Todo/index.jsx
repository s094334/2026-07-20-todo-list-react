import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav"
import AddBtn from "./AddBtn";
import { filterTabs } from './data'
import FilterTodoBtn from "./FilterBtn";
import TodoListItem from "./TodoListItem"
import { getTodos, postTodo, deleteTodo, toggleStatus, putTodo } from "../../apis";

function Todolist () {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [errorLog, setErrorLog] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const todos = async () => {
      setIsLoading(true);
      setErrorLog('');
      try {
        const data = await getTodos(
          {
            signal: abortController.signal
          });
        setTodos(data);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
      } finally {
        setIsLoading(false);
      }
    };

    todos();
    return () => console.log("hello");
  }, [])

  const handlePostTodo = async (content) => {
    setIsLoading(true);
    setErrorLog(''); 
    try {
      const result = await postTodo(content);
      setTodos((todos) => [...todos, result]);
    } catch (error) {
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    } finally {
      setIsLoading(false);
    }
  }

  const handleDeleteTodo = async (id) => {
    setIsLoading(true);
    setErrorLog('');
    try {
      await deleteTodo(id);
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    } catch (error) {
        setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    } finally {
      setIsLoading(false);
    }
  }

  const handleToggleStatus = async (id) => {
    setIsLoading(true);
    setErrorLog('');
    try {
      await toggleStatus(id);
      setTodos((todos) => todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status} : todo));
    } catch (error) {
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    } finally {
      setIsLoading(false);
    }
  }

  const handlePutTodo = async (id, content) => {
    setIsLoading(true);
    setErrorLog('');
    try {
      await putTodo(id, content);
      setTodos((todos) => todos.map((todo) => todo.id === id ? { ...todo, content} : todo));
    } catch (error) {
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    } finally {
      setIsLoading(false);
    }
  }

  const filterTodos = todos.filter((todo) => {
    switch (filter) {
      case 'pending':
        return !todo.status;
      case 'completed':
        return todo.status;
      default:
        return true;
    }
  })

  const completedTodos = todos.filter((todo) => todo.status);

  const handleClearCompleted = async () => {
    setIsLoading(true);
    try {
      await Promise.all(
        completedTodos.map((todo) => deleteTodo(todo.id))
      );
      setTodos((todos) => 
        todos.filter((todo) => !todo.status)
      )
    } catch (error) {
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    } finally {
      setIsLoading(false);
    }
    
  }

  return (
    <section
      id="todoListPage"
      className="bg-[linear-gradient(175deg,#FFD370_100%,#fff_0%)] md:bg-[linear-gradient(175deg,#FFD370_60%,#fff_40%)]"
    >
      <Nav />
      <div className="h-screen mx-auto px-8 py-4">
        <div className="w-full mx-auto md:w-[500px]">
          <AddBtn onAdd={ handlePostTodo } isLoading={ isLoading }/>
          <div className="bg-white rounded-[10px] shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
            <ul className="flex justify-evenly">
              {
                filterTabs.map((filterTab) => {
                  return (
                    <FilterTodoBtn 
                      key={ filterTab.dataTab } 
                      {...filterTab}
                      isSelected={filter === filterTab.dataTab}
                      onFilter={ setFilter }/>
                )})
              }
            </ul>
            <div className="pt-[23px] pl-6 pr-[17px] pb-8">
              <ul className="mb-2 overflow-y-auto max-h-[400px]">
                { errorLog && 
                  <p className="text-red-700"> { errorLog } </p>
                }
                {
                  filterTodos.map((todo) => 
                  <TodoListItem
                    key={todo.id} 
                    {...todo}
                    onDelete={ handleDeleteTodo }
                    onToggle={ handleToggleStatus }
                    onEdit={ handlePutTodo } />)
                }
              </ul>
              <div className="flex justify-between">
                <p className="text-sm text-[#333]"> {completedTodos.length} 個已完成項目</p>
                <button 
                  className="text-sm text-[#9F9A91] cursor-pointer" onClick={ handleClearCompleted }>
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