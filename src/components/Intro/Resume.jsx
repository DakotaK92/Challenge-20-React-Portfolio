import React from "react";
import PDF from "../../assets/Dakota_King_Resume 2024.pdf";

const Resume = () => {
    return (
        <div className="pdf">
            <a href={PDF} download className='btn'>Resume</a>
        </div>
    )
}

export default Resume;