import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const LikeButton = (props) => {
    const { petId, successCallback} = props;
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${petId}`)
            .then(res => setPet({
                ...res.data
            }))
    }, [petId])


    const likePet = (e) => {
        axios.put(`http://localhost:8000/api/pets/${petId}/like`, likes)
            .then(res => {
                successCallback();
            })
    }

    return (
        <Button color='success' className='text-white' onClick={likePet}>
            Like {pet.name}:
        </Button>
    )
}

export default LikeButton;