import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import './TodosData.css'

const TodosData = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: [user],
        queryFn: () =>
            fetch(`http://localhost:5000/boards?email=${user?.email}`).then(
                (res) => res.json(),
            ),
    })
    refetch()
    if (isLoading) return toast('Loading...')

    if (error) return toast.error('An error has occurred: ' + error.message)
    console.log(data)
    return (
        <div className='todo-container p-lg-5'>
            {
                data.map((_, i) => <div
                    key={_._id}
                    className={`tastingn${_.background}`}>
                    <Link to={`/todo/todoData/${_._id}`} className='btn btn-primary fs-5'>{_.boardname}</Link>
                </div>)
            }



        </div>
    );
};

export default TodosData;