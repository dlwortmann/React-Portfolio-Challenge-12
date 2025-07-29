import React from 'react';
import { Download } from 'lucide-react'
import './Resume.css'

function Resume() {
  return (
    <div className='resume-container'>
      <p>Click the link below for a downloadable resume! References available upon request. </p>
      <a
        href="/resume.pdf"
        target='_blank'
        download
        rel='noopener noreferrer'
        className="resume-button"
      >
        
        <Download size={20} />
        Resume
      </a>
    </div>
  )
};

export default Resume;