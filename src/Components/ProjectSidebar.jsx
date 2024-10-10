import { Button } from "./Button"

const ProjectSideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-[35rem] px-8 py-16 bg-sky-800 text-stone-50 ">
      <h2 className="mb-8 font-fold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-white hover:text-stone-200 hover:bg-stone-800"
          if (project.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-200"
          } else {
            cssClasses += "text-stone-400"
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default ProjectSideBar
