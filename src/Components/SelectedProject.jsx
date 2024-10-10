import Tasks from "./Tasks"
export const SelectedProject = ({
  project,
  deleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const { title, dueDate, description, id } = project
  console.log(dueDate)
  const selectedProjectTasks = tasks.filter((tasks) => tasks.projectId === id)
  const formattedDate = new Date(dueDate).toLocaleDateString()
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
        <div className=" flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone 600 mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => deleteProject(id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-prewrap">{description}</p>
      </header>
      <Tasks
        tasks={selectedProjectTasks}
        onAdd={onAddTask}
        onDelete={onDeleteTask}
      />
    </div>
  )
}
