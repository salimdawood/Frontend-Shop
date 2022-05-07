import React from 'react'

const CardStyle2 = ({className}) => {
  return(
    <div className={className}>
      <div className="card-image"/>
      <div className="card-text">
        <span className="data">4 days ago</span>
        <h2>Post One</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nihil aliquam odit ab, qui eius aliquid quod autem placeat impedit!</p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">4<sup>m</sup></div>
          <div className="type">read</div>
        </div>
        <div className="stat">
          <div className="value">871</div>
          <div className="type">views</div>
        </div>
        <div className="stat">
          <div className="value">32</div>
          <div className="type">comment</div>
        </div>
      </div>
    </div>
)
}

export default CardStyle2