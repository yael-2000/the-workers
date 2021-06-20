import React, { useState, useEffect } from 'react';
import workersList from '../services/workersList'

export default function Workers({ token }) {
    const [workers, setWorkers] = useState([]);
    useEffect(() => {
        if (!token) return;
        workersList.fetchWorkers(token).then((newWorker) => {
            setWorkers(newWorker);
        })
    }, [token])
    return (
        <ul>
            {
                workers.map((worker) => {
                    return (
                        <li key={worker.id}>
                            <h3>{worker.name}</h3>
                            <h3>{worker.status}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}