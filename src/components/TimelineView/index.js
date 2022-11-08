// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="main-container">
      <h1 className="head-1">
        MY JOURNEY OF
        <br />
        <span className="head-2">CCBP 4.0</span>
      </h1>
      <div className="chrono-card">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard details={each} key={each.id} />
            }
            return <ProjectTimelineCard details={each} key={each.id} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
