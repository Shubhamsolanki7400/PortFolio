import React from 'react'
import data from './data'
import projects from './data';
const Experience = () => {
  return (
    <div id="experience">
    <div className="timelineBox">
      {projects?.map((item, index) => (
        <TimelineItem
          heading={item.title}
          text={item.date}
          index={index}
          key={item.title}
        />
      ))}
    </div>
  </div>
  )
}

const TimelineItem = ({ heading, text, index }) => (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );

export default Experience