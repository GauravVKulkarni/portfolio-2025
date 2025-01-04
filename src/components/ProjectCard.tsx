interface ProjectCardProps {
    title: string;
    description: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
    return (
      <>
        <style>
          {`
            .project-card {
              width: 100%;
              margin: 2rem 0 2rem 0;
            }

            .project-card:hover .project-title {
              color: #535bf2;
              cursor: pointer;
            }

            .project-card:hover{
              cursor: pointer;
            }

            .project-title {
              font-size: clamp(1rem, 5vw, 1.6rem);
              text-align: left; /* Ensures the title is aligned left */
            }

            .title-arrow{
              width: 100%;
              margin: 1rem 0 0 0;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }

            .project-description {
              font-size: 1rem;
              color: #888;
              margin: 0.7rem 0 1rem 0;
              text-align: left; /* Ensures the title is aligned left */
            }
            .project-icon{
              width: clamp(1rem, 5vw, 1.6rem);
            }
          `}
        </style>
        <div className="project-card">
          <div className="title-arrow">
            <h1 className="project-title">{title}</h1>
            <div className="project-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>
          <p className="project-description">{description}</p>
        </div>
      </>
    );
  };
  
  export default ProjectCard;