// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'
// {
//     id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
//     categoryId: 'PROJECT',
//     title: '21 DECEMBER 2020',
//     projectTitle: 'Tourism Website',
//     description:
//       'A tourism website enables the user to browse through the images of popular destinations.',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
//     duration: '1 hr',
//     projectUrl: 'https://tourismapp.ccbp.tech/',
//   },

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="image-url" />
      <div className="head-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} target="__blank" className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
