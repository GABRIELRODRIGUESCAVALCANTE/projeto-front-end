import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="section-container">
      
      <div className={`section-header align-${titleAlign}`}>
        
        <h2 className="section-title">
            {title}
        </h2>

        {link && (
            <Link to={link.href} className="section-link">
                {link.text} &rarr; 
            </Link>
        )}

      </div>

      <div className="section-content">
        {children}
      </div>

    </section>
  );
}

export default Section;