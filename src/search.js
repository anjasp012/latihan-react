import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(props) {
    const [user, setUser] = useState([]);
    const [identifier, setIdentifier] = useState(1);
    const [loading, setLoading] = useState(false)

    const getUser = async () => {
        setLoading(true)
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data)
            console.log(setUser);
            setLoading(false)
        }
        catch(e){
            setLoading(true)
            console.log(e.message);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setIdentifier(identifier)
        getUser();
    }

    return (
        <div className='py-3'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="py-3">
                            <div className="row justify-content-end">
                                <div className="col-md-6">
                                    <form onSubmit={submitHandler}>
                                        <div className="d-flex">
                                            <input type="text" className='form-control me-2' name="identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {
                            loading ? <div className="text-danger">User Not Found</div> : 
                            <table className="table">
                            <thead>
                                <tr>
                                    <th className="th">id</th>
                                    <th className="th">name</th>
                                    <th className="th">username</th>
                                    <th className="th">email</th>
                                    <th className="th">Phone</th>
                                    <th className="th">Website</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;