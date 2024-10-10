import { NewProjects } from "./Components/NewProjects"
import { NoProjectSelected } from "./Components/NoProjectSelected"
import ProjectSideBar from "./Components/ProjectSidebar"
import { useState } from "react"
import { SelectedProject } from "./Components/SelectedProject"
function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  })
  const [open, setMenuOpen] = useState(false)
  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectToAdd = {
        ...projectData,
        id: Math.random(),
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projectToAdd],
      }
    })
  }
  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }
  const handleSelectedProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }
  const handleProjectDeletion = () => {
    const newProjects = projectState.projects.filter(
      (project) => project.id !== projectState.selectedProjectId
    )
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: newProjects,
      }
    })
  }
  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskToAdd = {
        text: text,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, taskToAdd],
      }
    })
  }
  const handleDeleteTask = (taskID) => {
    setProjectsState((prevState) => {
      const newTasks = prevState.tasks.filter((task) => task.id !== taskID)
      return {
        ...prevState,
        tasks: newTasks,
      }
    })
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  )
  let content
  if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        selectedProjectId={projectState.selectedProjectId}
        deleteProject={handleProjectDeletion}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    )
  }
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    )
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  )
}

export default App
