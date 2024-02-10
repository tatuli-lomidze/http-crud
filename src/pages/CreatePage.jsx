import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import useRequest from "../hooks/useRequest";

const CreatePage = () => {
    const { sendRequest, loading } = useRequest({ url: '/api/v1/todo', method: 'POST' })
    const navigate = useNavigate()

    const onSubmit = (name, isCompleted) => {
        sendRequest({ name, isCompleted })
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    };

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Create New Task</h2>
            <UserForm onFormSubmit={onSubmit} />
        </div>
    );
};

export default CreatePage;
