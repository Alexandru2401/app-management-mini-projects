import Sidebar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: null,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
