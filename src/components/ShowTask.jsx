export default function ShowTask({ taskList, setTaskList, task, setTask }) {

    const handleDelete = (id) => {
        const updatedList = taskList.filter(task => task.id !== id);
        setTaskList(updatedList);
        setTask({});
    }

    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo, id === id);
        // console.log(selectedTask)
        setTask(selectedTask);
    }
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="Title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
            </div>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={() => { handleEdit(task.id) }}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}