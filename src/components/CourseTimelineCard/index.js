// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

// {
//     id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
//     categoryId: 'COURSE',
//     title: '10 DECEMBER 2020',
//     courseTitle: 'Static Website',
//     description:
//       'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.',
//     duration: '10 days',
//     tagsList: [
//       {
//         id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
//         name: 'HTML Elements',
//       }
//     ],
//   },

const CourseTimelineCard = props => {
  const {details} = props
  const {duration, courseTitle, description, tagsList} = details

  return (
    <div className="course-card">
      <div className="course-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags">
        {tagsList.map(each => (
          <li key={each.id}>
            <p className="list-items">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
