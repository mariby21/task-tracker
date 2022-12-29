import Tasc from "./Tasc";

const Task = ({ tasks, onDelete, onTest }) => {
  return (
    <>
      {tasks.map((task) => (
        <Tasc key={task.id} task={task} onDelete={onDelete} onTest={onTest} />
      ))}
    </>
  );
};

export default Task;
