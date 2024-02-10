import useFetch from "../hooks/useFetch";

const MainPage = () => {

    const { response, error, loading } = useFetch({ url: '/api/v1/todo', method: 'GET' });
    const taskList = response?.items.map(i => ({
        name: i.name,
        isCompleted: i.isCompleted,
        id: i._uuid
      })) || [] 


    if(loading) return <p>loading...</p>
    if(error) return <p>{error}</p>

  return  (
 <div className="todo">
  {taskList.map((i) => <div key={i.id} style={{ border: "1px dashed pink" }}>
      <h3>Task: {i.name}</h3>
      <h5>Date: {i.date}</h5>
      <h5>User Name: {i.userName}</h5>
      <h4> {i.isCompleted ? "Task is completed" : "Task is not completed"} </h4>
    </div>
  )}
</div>
)
}

export default MainPage