import { Link, useNavigate } from "react-router-dom";
import { useUsersContext } from "../contexts/UsersContexts";

const MainPage = () => {
const {taskList,  dataLoading, deleteLoading, onDelete, checkedOnchange, checkedTasks} = useUsersContext()
 
    if(dataLoading || deleteLoading) return <p>loading...</p>

  return  (
 <div className="todo">
        <Link to={`/create`} style={{ border: "2px dashed pink", color: "pink" }}> <h1> Create New Task</h1></Link>

  {/* {taskList.map((i) => <div key={i.id} style={{ border: "1px dashed pink", color: "black", background: "plum"  }}> */}
      {/* <h3>Task: {i.name}</h3> */}
      {/* <h5>task made by: {i.userName}</h5> */}
      {/* <h5>task made on: {i.date}</h5> */}
      {/* <h4> {i.isCompleted ? "Task is completed" : "Task is not completed"} </h4> */}
      {/* <Link to={`/update/${i.id}`}>Edit</Link> <br /> */}
      {/* <button onClick={() => onDelete(i.id)}>Delete</button> */}
      <br />
      <input 
          type="checkbox" 
          // onChange={checkedOnchange(i.id)} 
          // checked={checkedTasks[i.id] || false} 
     />   
             <label>Mark if Completed</label>

      </div>
  )}
// </div>
// )
// }

export default MainPage