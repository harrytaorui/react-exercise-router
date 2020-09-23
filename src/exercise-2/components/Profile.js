import React, {Component, Fragment} from 'react';

class Profile extends Component {

  render() {
    const user = {
      userName: 'XXX',
      gender: 'Female',
      work: 'IT',
      website: '/my-profile'
    }
    return (
      <Fragment>
        <h1>UserName: {user.userName}</h1>
        <h1>Gender: {user.gender}</h1>
        <h1>Work: {user.work}</h1>
        <h1>Website:{user.website}</h1>
      </Fragment>
    )
  }
}

export default Profile;