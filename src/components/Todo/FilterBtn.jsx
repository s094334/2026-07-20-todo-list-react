function FilterTodoBtn ({ name, dataTab, isSelected }) {
  return (
    <li className="w-full">
      <button
        data-tab={ dataTab }
        className={`block w-full p-4 font-bold leading-5 text-center border-b-2 ${isSelected ? "text-[#333] border-[#333]" : "text-[#9F9A91] border-[#efefef]"}`}
      >
        { name }
      </button>
    </li>
  )
};

export default FilterTodoBtn;