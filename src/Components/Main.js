import React from 'react';
//for the icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Main(){
    return(
        <main>
            <img src='/images/me.JPG' className='profile-pic' alt='A beautiful afro americain with a nice smile!'/>
            <h1>Dimitry Aujour</h1>
            <h2>Frontend Developer</h2>
            <div id={'boutons'}>
            <button id={'Email'}>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </button>
            <button id={'LinkedIn'}>
                <FontAwesomeIcon icon={faEnvelope} /> Email
            </button>
            </div>


        </main>
    )
}
export default Main;