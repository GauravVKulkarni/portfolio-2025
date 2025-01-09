import ProjectCard from "../ProjectCard"

function Projects() {
  return (
    <>
        <style>
          {`
            .projects-container{
                width: 100%;
                padding-top: 25vh;
            }

            .page-title{
              width: 100%;
              text-align: left;
              margin-bottom: 4rem;
            }
          `}
        </style>
        <div className="projects-container">
            <div className="page-title">
                <h1>Projects</h1>
            </div>
            <ProjectCard title="DocLens" description="Automated Document Data Extraction and Verification System, Smart India Hackathon 2024 Winner" />
            <hr className="divider-line"></hr>
            <ProjectCard title="ResearchHouse" description="Post Graduation Dissertation Management System, Smart India Hackathon 2023 Finalist" />
        </div>
    </>
  )
}

export default Projects