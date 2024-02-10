
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


// import { useRef } from "react"

// const UserForm = ({onFormSubmit, name, isCompleted, date, userName}) => {

//     const nameRef = useRef('')
//     const isCompletedRef = useRef()
//     const dateRef = useRef()
//     const userNameRef = useRef()

    // const onChange = (e) => {
    //     setName(e.target.value)
    // }

    // const checkedOnchange = (e) => {
    //     setIsCompleted(e.target.checked)
    // }


//     const onSubmit = (e) => {
//         e.preventDefault();
//         // console.log("added: ", task);
//         // onFormSubmit(name, isCompleted)
//         // setName('');
//         // setIsCompleted('');
//        if( nameRef.current && isCompletedRef.current && dateRef.current && userNameRef.current)   {
//         onFormSubmit(nameRef.current.value, isCompletedRef.current.value, dateRef.current.value, userNameRef.current.value) 
//     } else {
//         return 'please fill all the info'
//     }
//     }

//     return (
//      <div>
//       <form onSubmit={onSubmit}>

//         {/* task input  */}
//         <input type="text" placeholder="task"
//         //  value={name}
//          ref={nameRef}
//          defaultValue={name}
//         />

//            {/* check input  */}
//         <input type="checkbox" 
//           ref={isCompletedRef}
//           />
//         <label >Completed</label>


//         <button>Add</button>
//      </form> 
//      </div>
//     )
//     }


 
// export default UserForm



