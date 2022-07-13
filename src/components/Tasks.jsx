import Task from "./Task";

export default function Tasks({ tasks }) {
  if (tasks.length > 0) {
    //console.log("soy la props", tasks);
    return (
      <div>
        {tasks.map((task) => {
          return <Task key={task.id} description={task.description} />;
        })}
      </div>
    );
  } else {
    return <div>No hay task!!!</div>;
  }
}
