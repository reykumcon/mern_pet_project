import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const AdoptButton = (props) => {
    const { petId, successCallback } = props;
    const [pet, setPet] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${petId}`)
            .then(res => setPet({
                ...res.data
            }))
    }, [petId])


    const adoptPet = (e) => {
        axios.delete(`http://localhost:8000/api/pets/${petId}`)
            .then(res => {
                successCallback();
            })
    }

    return (
        <Button color='danger' className='text-white' onClick={adoptPet}>
            Adopt {pet.name}
        </Button>
    )
}

export default AdoptButton;