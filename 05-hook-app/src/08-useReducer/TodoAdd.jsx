
import { useForm } from "../Hook/useForm";


export const TodoAdd = ({onNewTodo}) => {

   const {description,onInputChange,onResetForm} = useForm({
    description:''
   })

   const onFormSubmit =(event)=>{
    event.preventDefault();

    if (description.length<=1)return;
    const newTodo={
        id:new Date().getTime(),
        done:false,
        description:description,
    }
    onNewTodo(newTodo);
    onResetForm();
   }
    
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="form-control"
          name='description'
          value={description}
          onChange={onInputChange}
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};
