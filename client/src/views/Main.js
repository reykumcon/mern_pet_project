import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import PetList from '../components/PetList';
import axios from 'axios';

const Main = () => {
    const [pets, setPets] = useState([])
    const [loaded, setLoaded] = useState([])
    
    useEffect(() => {
        axios.get('https://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data);
                setLoaded(true);
            })
    }, [pets]);
    
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <div className='d-flex justify-content-between'>
                        <h1>Pet Shelter</h1>
                        <Link to='/pets/new'>Add a pet to the shelter</Link>
                    </div>
                    <h3 className='mt-3 mb-3'>These pets are looking for a good home</h3>
                    { loaded && <PetList /> }
                </div>
            </div>
        </div>
    )
}

export default Main;