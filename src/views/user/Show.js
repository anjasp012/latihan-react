import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Show(props) {
  const [user, setUser] = useState([]);
  let { identifier } = useParams();

  const getUser = async () => {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`
      );
      setUser(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>Email : {user.username}</div>
              <div>Email : {user.email}</div>
              <div>Phone : {user.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
