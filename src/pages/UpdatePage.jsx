import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm"
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const UpdatePage = () => {
     const navigate = useNavigate()
     const  {userId} =  useParams()
     const {response, loading, error} = useFetch({url: `/api/v1/todo/${userId}`, method: 'GET'})

     const {sendRequest} = useRequest({url: `/api/v1/todo/${userId}`, method: 'PUT'})
     const onSubmit = (name, isCompleted) => {
          sendRequest({name, isCompleted})
          .then(() => navigate('/'))
          .catch(err => console.log(err))
     } 
          
     if(loading && !response) return <p>loading...</p>
     if(error || !response) return <p>sth wrong</p>

     return <UserForm onFormSubmit={onSubmit} 
     name={response.name}
     isCompleted = {response.isCompleted} />

     
}
export default UpdatePage