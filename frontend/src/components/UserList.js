import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    }

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <Link to="add" className='button is-primary mb-5'>Add New User</Link>
      <table className='table is-stripped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user, index) => (
                    <tr key={user.uuid}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className='is-capitalized'>{user.role}</td>
                        <td>
                            <Link to={`edit/${user.uuid}`} className='button is-small is-info mr-1'>Edit</Link>
                            <button onClick={() => deleteUser(user.uuid)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default UserList