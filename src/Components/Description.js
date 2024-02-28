import React from 'react';

function Description(){
    return(
        <div className={'description'}>
            <h3>About</h3>
            <p>
                I am a recent Computer Science graduate with a keen interest in React and its associated technologies.
                I am eager to contribute to a company that utilizes these technologies!
            </p>
            <h3>Interests</h3>
            <ul className="colored-bullets">
                <li>Web development</li>
                <li>Photography</li>
                <li>Blogging</li>
                <li>Finance/crypto</li>
                <li>Fitness</li>
            </ul>
        </div>
    )
}export default Description;