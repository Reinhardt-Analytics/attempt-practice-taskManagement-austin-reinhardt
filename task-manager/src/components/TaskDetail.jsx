import { tasks } from './TaskList';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {
    const { id } = useParams();
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return <p>Task not found.</p>
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskDetail;