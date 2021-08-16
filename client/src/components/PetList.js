import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Table } from 'reactstrap';
import AdoptButton from './AdoptButton';

const PetList = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data));
    }, [pets])

    const removeFromDom = _id => {
        setPets(pets.filter(pet => pet._id !== _id))
    }

    return (
        <Table className='table-bordered table-striped align-middle text-center'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {pets.map((pet, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`}>
                                    Details
                                </Link>
                                &nbsp; | &nbsp;
                                <Link to={`/pets/${pet._id}/edit`}>
                                    Edit
                                </Link>
                                &nbsp; | &nbsp;
                                <AdoptButton 
                                    petId={pet._id}
                                    successCallback={()=>removeFromDom(pet._id)}
                                />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default PetList;