import React from 'react';
import './Pages.css'; 
import Nikhil from '../Nikhil.jpeg'

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src={Nikhil} alt="Profile" />
        </div>
        <div className="profile-content">
          <h2 className="profile-title">Frontend Developer</h2>
          <p className="profile-description">I am a frontend developer with experience in developing several ERP systems.</p>
          
          <div className="profile-info">
            <p><strong>Birthday:</strong> 01/08/1999</p>
            <p><strong>Website:</strong> www.example.com</p>
            <p><strong>Phone:</strong> +91 9694150491</p>
            <p><strong>City:</strong> Jaipur, Rajasthan</p>
            <p><strong>Age:</strong> 25</p>
            <p><strong>Degree:</strong> B Tech</p>
            <p><strong>Email:</strong> nikhilmishra850313@gmail.com</p>
            <p><strong>Job:</strong> Working</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
