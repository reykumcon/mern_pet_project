import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AdoptButton from '../components/AdoptButton';
import LikeButton from '../components/LikeButton';
import { Table } from 'reactstrap';

const Detail = (props) => {
    const { id } = props;
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet({
                ...res.data
            }))
    }, [id])

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <div className='d-flex justify-content-between'>
                        <h1>Pet Shelter</h1>
                        <Link to='/'>Back to home</Link>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h3 className='mt-3'>Details about: {pet.name}</h3>
                        <AdoptButton
                            petId={pet._id}
                            successCallback={() => navigate("/")}
                        />
                    </div>
                </div>
            </div>
            <div className='row mt-3 text-center'>
                <div className='col p-5'>
                    <Table>
                        <tr>
                            <th scope='row'>Pet Type:</th>
                            <td>{pet.type}</td>
                        </tr>
                        <br />
                        <tr>
                            <th scope='row'>Description:</th>
                            <td>{pet.description}</td>
                        </tr>
                        <br />
                        <tr>
                            <th scope='row'>Type:</th>
                            <td>{pet.skillOne}, {pet.skillTwo}, {pet.skillThree}</td>
                        </tr>
                        <br />
                    </Table>
                    <p>
                        <LikeButton petId={pet._id} successCallback={() => navigate(`/`)} /> : {pet.likes} like(s)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detail;