import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Index(props) {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => {
          return (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <div className="mb-3">
                    <a href={`http://${user.website}`}>{user.website}</a>
                  </div>
                  <div className="mb-3">{user.username}</div>
                  <NavLink
                    to={`${user.id}`}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
