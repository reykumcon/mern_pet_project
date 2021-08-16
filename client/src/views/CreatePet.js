import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PetForm from '../components/PetForm';

const CreateAuthor = (props) => {
    const [pets, setPets] = useState([]);
    const [errors, setErrors] = useState([]);

    const createPet = pet => {
        axios.post('http://localhost:8000/api/pets', pet)
            .then(res => {
                setPets([...pets, res.data]);
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
                    <h3 className='mt-3 mb-3'>Know a pet needing a home?</h3>
                    <PetForm 
                        initialName=''
                        initialType=''
                        initialDescription=''
                        initialSkillOne=''
                        initialSkillTwo=''
                        initialSkillThree=''
                        onSubmitProp={createPet}
                        errors={errors}
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateAuthor;