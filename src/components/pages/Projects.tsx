import ProjectCard from "../ProjectCard"

function Projects() {
  return (
    <>
        <style>
          {`
            .projects-container{
                width: 100%;
                padding: 1rem clamp(2rem, 5%, 3rem)
            }

            .divider-line {
            border: 0;
            height: 1px;
            background-color: var(--divider-line-color);
            margin: 1rem 0;
          }
          `}
        </style>
    <div className="projects-container">
        <ProjectCard title="DocLens" description="Automated Document Data Extraction and Verification System, Smart India Hackathon 2024 Winner" />
        <hr className="divider-line"></hr>
        <ProjectCard title="ResearchHouse" description="Post Graduation Dissertation Management System, Smart India Hackathon 2023 Finalist" />
    </div>
    </>
  )
}

export default Projects