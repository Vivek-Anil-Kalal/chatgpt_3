import React from 'react'
import './features.css'

// props 
const Features = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        {/* Like this we can add empty div to add empty space  */}
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p> {text}</p>
      </div>
    </div>
  )
}

export default Features