import  { useState } from "react";

const UserForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [date, setDate] = useState('')
  const [userName, setUserName] = useState('')

  const onChange = (e) => {
    setName(e.target.value)
  }

  const checkedOnchange = (e) => {
    setIsCompleted(e.target.checked)
  }

  const onDateChange = (e) => {
    setDate(e.target.value);
  }

  const onUsernameChange = (e) => {
    setUserName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(name, isCompleted, date, userName);
    setName('');
    setIsCompleted(false);
    setDate('');
    setUserName('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Task" value={name} onChange={onChange} />
        <input type="checkbox" onChange={checkedOnchange} checked={isCompleted} />
        <label>Completed</label>
        <input type="date" value={date} onChange={onDateChange} />
        <input type="text" placeholder="User name" value={userName} onChange={onUsernameChange} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default UserForm;






// import { useState } from "react"

// const UserForm = ({onFormSubmit}) => {

//     const [name, setName] = useState('')
//     const [isCompleted, setIsCompleted] = useState(false)
//     const [date, setDate] = useState()
//     const [userName, setUserName] = useState()



//     const onChange = (e) => {
//         setName(e.target.value)
//     }

//     const checkedOnchange = (e) => {
//         setIsCompleted(e.target.checked)
//     }


//     const onSubmit = (e) => {
//         e.preventDefault();
//         // console.log("added: ", task);
//         onFormSubmit(name, isCompleted)
//         setName('');
//         setIsCompleted('');
//     }

//     return (
//      <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" placeholder="task"  onChange={onChange} />
//         <input type="checkbox" onChange={checkedOnchange} checked={isCompleted} />
//         <label >Completed</label>
//         <button>Add</button>
//      </form> 
//      </div>
//     )
//     }


 
// export default UserForm


