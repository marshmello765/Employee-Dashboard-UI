import React, { useState } from 'react';
import './employee-list.css';
import user from './images/user.png';
import home from './images/home.png';
import { useHistory } from 'react-router-dom';
import moptro from './images/moptro.png';
import searchicon from './images/search-icon.png';

const EmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const Navigate = () => {
      <Navigate to="/employee-dashboard/" />;
      };

  const handleClick = () => {
    // Redirect to employee dashboard or handle employee details view
    // Logic to handle view button click
    // For example:
    history.push('/employee-dashboard');
  };

  // Mock employee data (replace with your actual data)
  const employees = [
    { id: 1, name: 'Arjun', dob: '16-11-2000', role: 'Software Engineer' },
    { id: 2, name: 'Sheetal', dob: '07-09-2001', role: 'Graphic Designer' },
    { id: 3, name: 'Mark', dob: '16-07-1984', role: 'Senior Software Engineer' }
    // Add more employees as needed
  ];

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="employee-list-container">
      {/* Your center logo and other components */}

       {/* Center Logo */}
       <div className='center-logo'>
            <img src={moptro} alt="Company Logo" />
         </div>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by employee name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <img src={searchicon} alt="Search" className="search-icon" />
      </div>

      {/* Display filtered employee cards */}
      {filteredEmployees.map((employee) => (
        <div className="list-container" key={employee.id}>
          {/* Display employee details */}
          <div className="row">
            <div className="id">EMPID :</div>
            <div>
              <b>&nbsp;&nbsp;{employee.id}</b>
            </div>
            <div className="counter">{employee.id}</div>
          </div>
          <div className="row">
            <div>Name :</div>
            <div>
              <b>&nbsp;&nbsp;{employee.name}</b>
            </div>
          </div>
          <div className="row">
            <div>DOB :</div>
            <div>
              <b>&nbsp;&nbsp;{employee.dob}</b>
            </div>
          </div>
          <div className="row">
            <div>Role :</div>
            <div>
              <b>&nbsp;&nbsp;{employee.role}</b>
            </div>
          </div>
          <div className="row">
            <button className="view-button" onClick={handleClick}>
              View
            </button>
          </div>
        </div>
      ))}

      {/* Sticky bottom options */}
      <div className="sticky">
        <div className="bottom-options">
          <div className="home-icon">
            <img src={home} alt="Home" onClick={Navigate} />
          </div>
          <div className="user-icon">
            <img src={user} alt="User details" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
