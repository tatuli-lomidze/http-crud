import { useRef } from "react";

const UserForm = ({ onFormSubmit, name, isCompleted, date, userName }) => {
    const nameRef = useRef(null)
    const isCompletedRef = useRef(null)
    const dateRef = useRef(null)
    const userNameRef = useRef(null)

    const onSubmit = (e) => {
        e.preventDefault()
        
        const newName = nameRef.current.value
        const newIsCompleted = isCompletedRef.current.checked
        const newDate = dateRef.current.value
        const newUserName = userNameRef.current.value

        if (newName && newDate && newUserName) {
            onFormSubmit(newName, newIsCompleted, newDate, newUserName)
        } else {
            alert('Please fill in all the info')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Task"
                    defaultValue={name}
                    ref={nameRef}
                />

                <input
                    type="checkbox"
                    defaultChecked={isCompleted}
                    ref={isCompletedRef}
                />
                <label>Completed</label>

                <input
                    type="date"
                    defaultValue={date}
                    ref={dateRef}
                />

                <input
                    type="text"
                    placeholder="User Name"
                    defaultValue={userName}
                    ref={userNameRef}
                />

                <button>Add</button>
            </form>
        </div>
    )
}

export default UserForm
