import React from 'react';
import customercare from './images/customer-care.png';
import moptro from './images/moptro.png';
import './dashboard.css';
import user from './images/user.png';
import home from './images/home.png';
const Dashboard = () => {
  

  return (
    <div className="dashboard-container">
      <div className="top-right">
        <img src= {customercare} alt="Customer Care" />
      </div>
      <div className="center-logo">
        <img src={moptro} alt="Company Logo" />
      </div>
      <div className="employee-productivity-container">
        <h2>Employee Productivity Dashboard</h2>
        {/* Create bars for productivity (you may use a chart library like Chart.js) */}
        {/* Example structure (assuming using divs for bars): */}
        {/* Day 1 */}
        <div className="productivity-bars">
          {/* Day 1 */}
          <div className="bar-container">
            <div className="bar-text" >Productivity on Monday</div>
            <div className="percentage" >20%</div>
          </div>

          <div className="progressive-bar-mon"></div>
          {/* ... Repeat for other days */}
        </div>
        {/* Day 2 */}
        <div className="productivity-bars">
          <div className="bar-container">
            <div className="bar-text" >Productivity on Tuesday</div>
            <div className="percentage">60%</div>
          </div>

          <div className="progressive-bar-tue"></div>
          {/* ... Repeat for other days */}
        </div>
        {/* Day 3 */}
        <div className="productivity-bars">
          <div className="bar-container">
            <div className="bar-text" >Productivity on wednesday</div>
            <div className="percentage">4%</div>
          </div>

          <div className="progressive-bar-wed"></div>
          {/* ... Repeat for other days */}
        </div>
        {/* Day 4 */}
        <div className="productivity-bars">
          <div className="bar-container">
            <div className="bar-text" >Productivity on Thursday</div>
            <div className="percentage" >84%</div>
          </div>

          <div className="progressive-bar-thu"></div>
          {/* ... Repeat for other days */}
        </div>
        {/* Day 5 */}
        <div className="productivity-bars">
          <div className="bar-container">
            <div className="bar-text" >Productivity on Friday</div>
            <div className="percentage">98%</div>
          </div>

          <div className="progressive-bar-fri"></div>
          {/* ... Repeat for other days */}
        </div>
        
      </div>

      <div className="sticky">
        <div className='bottom-options'>
            <div className="home-icon">
              <img src= {home} alt="Home" />
            </div>
            <div className="user-icon">
              <img src= {user} alt="User details" />
            </div> 
        </div>
      </div>
  </div>
  
    
  );
};

export default Dashboard;
