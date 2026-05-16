import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const coursesList = [
    { id: 1, title: 'Introduction to React' },
    { id: 2, title: 'Advanced JavaScript' },
    { id: 3, title: 'Web Design Fundamentals' }
  ];

  return (
    <div className="page-container">
      <h1>Available Courses</h1>
      <ul className="course-list">
        {coursesList.map(course => (
          <li key={course.id} className="course-item">
            <h3>{course.title}</h3>
            <Link to="/video" className="btn">Watch Course</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
