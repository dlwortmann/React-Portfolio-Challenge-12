import React from 'react';
import { Download } from 'lucide-react'

function Resume() {
    return (
        <div>
            Click the link below for a downloadable resume! References available upon request.
            <hr />
        <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
      >
        <Download size={20} />
        Resume
      </a>
      </div>
    )
};

export default Resume;