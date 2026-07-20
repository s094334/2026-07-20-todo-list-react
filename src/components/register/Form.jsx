import { useForm } from "react-hook-form"
import { fields, subTitle } from './data'
import { signUp } from '../../api'
import { Link } from 'react-router'

const Input = ({ label, name, register, required, rules = {}, errors, ...props }) => (
  <>
    <label className="text-sm font-bold mt-4 mb-1" htmlFor={name}>{label}</label>
    <input 
      id={name} 
      className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
      {...props}  
      {...register(name, { required, ...rules })}/>
    {errors[name] && (
        <p role="alert" className="text-red-600 text-sm mt-1">{ errors[name].message }</p>
    )}
  </>
)

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit } = useForm()
  const onSubmit = async (data) => {
    await signUp(data.email, data.password, data.name)
  }

  return (
    <div>
      <form className="flex flex-col ml-0 md:ml-[100px]" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold mb-6 text-xl text-center md:text-2xl md:text-left">
          { subTitle }
        </h2>
        {
          fields.map((field) => (
            <Input key={field.name} {...field} register={register} errors={errors} />
          ))
        }
        <input
          className="w-32 h-12 rounded-[10px] bg-[#333] text-white self-center my-6 font-bold cursor-pointer text-center text-base"
          type="submit"
          defaultValue="註冊帳號"
        />
        <Link
          to="/"
          className="block text-[#333] font-bold no-underline text-center"
        >
          登入
        </Link>
      </form>
    </div>
  )
};

export default Form;