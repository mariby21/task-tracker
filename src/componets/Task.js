import Tasc from "./Tasc";

const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Tasc key={task.id} task={task} />
      ))}
    </>
  );
};

export default Task;
