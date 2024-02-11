import { createContext, useCallback, useContext, useMemo, useState } from "react";
import useRequest from "../hooks/useRequest";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const UsersContext = createContext(null)

const UsersContextProvider = ({children}) => {
    const { response, error, loading: dataLoading, resendRequest} = useFetch({ url: '/api/v1/todo', method: 'GET' });

    const nav = useNavigate()

    const {sendRequest, loading: deleteLoading} = useRequest({method: 'DELETE'})
    const [checkedTasks, setCheckedTasks] = useState({})
    const taskList = (() => {
     return response?.items.map(i => {
      return {
        name: i.name,
        isCompleted: i.isCompleted,
        id: i._uuid,
        userName: i.userName,
        date: i.date
      }
      }) || [] 
    }, [response])

      const checkedOnchange = (taskId) => (e) => {
        setCheckedTasks(prevState => ({
            ...prevState,
            [taskId]: e.target.checked 
        }));

        nav('/DoneTasksPage');
    }
      const onDelete = useCallback(() => (iId) => {
        sendRequest(null, `/api/v1/todo/${iId}`)
        .then(() => resendRequest())
      }, [resendRequest])

    const contextValue = useMemo(() => ({
      dataLoading,
      deleteLoading,
      taskList,
      onDelete,
      checkedOnchange

    }), [dataLoading, deleteLoading, taskList, onDelete, checkedOnchange])
    return <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>

}

export const useUsersContext = () => {
  const contextValue = useContext(UsersContext)
  if (!contextValue) throw new Error('Your component is outside')
  return contextValue
}

export default UsersContextProvider