import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const MainPage = () => {

    const { response, error, loading, resendRequest} = useFetch({ url: '/api/v1/todo', method: 'GET' });
    const {sendRequest} = useRequest({method: 'DELETE'})
    const taskList = response?.items.map(i => ({
        name: i.name,
        isCompleted: i.isCompleted,
        id: i._uuid
      })) || [] 

    const onDelete = (iId) => {
      sendRequest(null, `/api/v1/todo/${iId}`)
      .then(() => resendRequest())
    }
    if(loading) return <p>loading...</p>
    if(error) return <p>{error}</p>

  return  (
 <div className="todo">
  {taskList.map((i) => <div key={i.id} style={{ border: "1px dashed pink" }}>
      <h3>Task: {i.name}</h3>
      <h4> {i.isCompleted ? "Task is completed" : "Task is not completed"} </h4>
      <Link to={`/update/${i.id}`}>Edit</Link>
      <button onClick={() => onDelete(i.id)}>Delete</button>
    </div>
  )}
</div>
)
}

export default MainPage