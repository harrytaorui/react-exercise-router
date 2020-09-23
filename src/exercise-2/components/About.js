import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const About = (props) => {
  const company = {
    name: 'Thoughtworks local',
    location: 'Chengdu'
  }
  return (
    <Fragment>
      <h1>Company Name:{company.name}</h1>
      <h1>Location:{company.location}</h1>
      <h1>For more information, Please view our <Link to='/' className='nav-link'>website</Link></h1>
    </Fragment>
  )
}

export default About;