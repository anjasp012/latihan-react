import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(props) {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUsers();
    },[])

    // console.log();
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="th">id</th>
                                    <th className="th">name</th>
                                    <th className="th">username</th>
                                    <th className="th">email</th>
                                    <th className="th">street</th>
                                    <th className="th">city</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) =>{
                                        return(
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street}</td>
                                            <td>{user.address.city}</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;