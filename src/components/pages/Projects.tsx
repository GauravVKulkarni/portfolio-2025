import ProjectCard from "../ProjectCard"

function Projects() {
  return (
    <>
        <style>
          {`
            .projects-container{
                width: 100%;
                margin-top: 15vh;
            }

            .divider-line {
            border: 0;
            height: 1px;
            background-color: var(--divider-line-color);
            margin: 1rem 0;
          }

          .page-title{
            width: 100%;
            text-align: left;
            margin-bottom: 4rem;
          }

          .page-title h1{
            font-size: clamp(1.6rem, 4vw, 2.4rem);
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