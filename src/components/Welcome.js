import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;


function Welcome() {
  const [user, setUser] = useState();


  async function sendRequest() {
    const res = await axios.get('http://localhost:3300/api/user/user', {
      withCredentials: true,
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }

  useEffect(() => {

    sendRequest().then(data => setUser(data.user));

  }, []);

  return (
    <div>
      {user ? <h1>Welcome {user.name} </h1> : <h1> Loading..! </h1>}
    </div>
  )
}

export default Welcome