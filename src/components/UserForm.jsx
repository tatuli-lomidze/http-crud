import { useState } from "react"

const UserForm = ({onFormSubmit}) => {

    const [name, setName] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)


    const onChange = (e) => {
        setName(e.target.value)
    }

    const checkedOnchange = (e) => {
        setIsCompleted(e.target.checked)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("added: ", task);
        onFormSubmit(name, isCompleted)
        setName('');
        setIsCompleted('');
    }

    return (
     <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="task" value={name} onChange={onChange} />
        <input type="checkbox" onChange={checkedOnchange} checked={isCompleted} />
        <label >Completed</label>
        <button>Add</button>
     </form> 
     </div>
    )
    }


 
export default UserForm