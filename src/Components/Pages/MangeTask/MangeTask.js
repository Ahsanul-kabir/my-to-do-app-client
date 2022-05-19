import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MangeTask = () => {
    const [todos, setTodos] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://whispering-basin-80515.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))

    }, [])

    const handleUserDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            // console.log('deleting user with id, ', id);

            const url = `https://whispering-basin-80515.herokuapp.com/todos/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        console.log('Successfully deleted');
                        const remaining = todos.filter(todo => todo._id !== id)
                        setTodos(remaining)
                    }
                })
        }
    }

    // match  to user
    const myItems = todos.filter(todo => todo.email === user.email)

    return (
        <div className="manage-order poppins-font" style={{ margin: '100px 0' }}>
            <Container className="py-5">
                <Link to="/todoapp"><button className='btn btn-info w-25'>Add New Task</button></Link>

                <h2 className="text-center pb-4 text-uppercase text-danger"> Manage Tasks</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="bg-primary text-white">
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map((todo, index) => <tr>

                                <td>{index + 1}</td>
                                <td>{todo.taskName}</td>
                                <td>{todo.description}</td>
                                <td><button className="btn btn-danger" onClick={() => handleUserDelete(todo._id)}>Delete</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </Table>
            </Container>
        </div >
    );
};

export default MangeTask;