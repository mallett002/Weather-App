import React from 'react';
import { Link } from 'react-router-dom';

//back button to HomePage component:
const ToHome = (props) => (
        <div className='tohome'>
            <Link to='/'><p>PICK A DIFFERENT CITY</p></Link>
        </div>
)


export default ToHome;