import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PetForm from '../components/PetForm';

const UpdatePet = (props) => {
    const { id } = props;
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [id])

    const updatePet = pet => {
        axios.put(`http://localhost:8000/api/pets/${id}`, pet)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col'>
                    <div className='d-flex justify-content-between'>
                        <h1>Pet Shelter</h1>
                        <Link to='/'>Back to home</Link>
                    </div>
                    { loaded && <h3 className='mt-3 mb-3'>Edit {pet.name}</h3> }
                    { loaded && (
                        <PetForm
                            initialName={pet.name}
                            initialType={pet.type}
                            initialDescription={pet.description}
                            initialSkillOne={pet.skillOne}
                            initialSkillTwo={pet.skillTwo}
                            initialSkillThree={pet.skillThree}
                            onSubmitProp={updatePet}
                            errors={errors}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default UpdatePet;