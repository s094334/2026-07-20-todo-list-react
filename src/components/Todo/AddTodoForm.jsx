import { useForm } from "react-hook-form";

function AddTodoForm ({ onAdd, isLoading }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch
  } = useForm()

  const content = watch("content");

  const onSubmit = async (data) => {
    await onAdd(data.content);
    reset();
  }

  return (
    <form 
      onSubmit={ handleSubmit(onSubmit) }
      className="relative flex w-full mb-4 shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
      <input
        className="relative w-full h-[47px] pl-4 text-base bg-white rounded-[10px]"
        type="text"
        placeholder="請輸入待辦事項"
        { ...register("content") }
      />
      <button
        type="submit"
        disabled={ isLoading || !content?.trim() }
        className="absolute top-1 right-1 block w-10 h-[39px] p-[10px] text-center text-[20px] leading-none text-white no-underline bg-[#333] rounded-[10px] disabled:bg-gray-300"
      >
        +
      </button>
    </form>
  )
};

export default AddTodoForm;