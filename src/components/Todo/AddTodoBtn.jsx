
function AddTodoBtn () {
  return (
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
  )
};

export default AddTodoBtn;