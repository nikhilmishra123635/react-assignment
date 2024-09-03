import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Pages.css';

const PageThree = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
            <center><h1></h1></center>
            <hr />
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                        <h3>Address</h3>
                        <p>City Palace, Jaipur, Rajasthan</p>
                    </div>
                </div>
                <hr />
                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <div>
                        <h3>Call Us</h3>
                        <p>+91 9694150491</p>
                    </div>
                </div>
                <hr />
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                        <h3>Email Us</h3>
                        <p>nikhilmishra850313@gmail.com</p>
                    </div>
                </div>
                <hr />
                <div className="map-container">
                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.636797993565!2d75.7525679150369!3d26.967189883103215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db556bcaee947%3A0x2089534643b46947!2sJhotwara%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1693750459085!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>

            <div className="contact-form">
                <center><h1>Contact Form</h1></center>
                <hr />
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="First Name" className="form-input" />
                        <input type="text" placeholder="Last Name" className="form-input" />
                    </div>

              
                    <div className="form-group">
                        <input type="number" placeholder="Contact Number" className="form-input" />
                        <input type="email" placeholder="Your Email" className="form-input" />
                    </div>
                
                    <div className="form-group">
                    <input type="text" placeholder="Subject" className="form-input" />
                    </div>
                    <div className="form-group">
                    <textarea placeholder="Message" className="form-textarea"></textarea>
                    </div>
                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default PageThree;