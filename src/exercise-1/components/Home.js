import React, {Fragment} from 'react';


const Home = (props) => {
  return (
    <Fragment>
      <h1>This is a beautiful Home Page.</h1>
      <h1>And the url is {props.location.pathname}</h1>
    </Fragment>
  )
}

export default Home;