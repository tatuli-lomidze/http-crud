import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { useState } from "react";

const MainPage = () => {

    const { response, error, loading, resendRequest} = useFetch({ url: '/api/v1/todo', method: 'GET' });

    const nav = useNavigate()

    const {sendRequest} = useRequest({method: 'DELETE'})
    const [checkedTasks, setCheckedTasks] = useState({})
    const taskList = response?.items.map(i => ({
        name: i.name,
        isCompleted: i.isCompleted,
        id: i._uuid,
        userName: i.userName,
        date: i.date

      })) || [] 

      const checkedOnchange = (taskId) => (e) => {
        setCheckedTasks(prevState => ({
            ...prevState,
            [taskId]: e.target.checked 
        }));

       
        nav('/DoneTasksPage');
    }

    const onDelete = (iId) => {
      sendRequest(null, `/api/v1/todo/${iId}`)
      .then(() => resendRequest())
    }
    if(loading) return <p>loading...</p>
    if(error) return <p>{error}</p>

  return  (
 <div className="todo">
        <Link to={`/create`} style={{ border: "2px dashed pink", color: "pink" }}> <h1> Create New Task</h1></Link>

  {taskList.map((i) => <div key={i.id} style={{ border: "1px dashed pink", color: "black", background: "plum"  }}>
      <h3>Task: {i.name}</h3>
      <h5>task made by: {i.userName}</h5>
      <h5>task made on: {i.date}</h5>
      <h4> {i.isCompleted ? "Task is completed" : "Task is not completed"} </h4>
      <Link to={`/update/${i.id}`}>Edit</Link> <br />
      <button onClick={() => onDelete(i.id)}>Delete</button>
      <br />
      <input 
          type="checkbox" 
          onChange={checkedOnchange(i.id)} 
          checked={checkedTasks[i.id] || false} 
     />   
             <label>Mark if Completed</label>

      </div>
  )}
</div>
)
}

export default MainPage