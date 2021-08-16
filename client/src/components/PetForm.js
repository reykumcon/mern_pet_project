import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const PetForm = (props) => {
    const {
        initialName,
        initialType,
        initialDescription,
        initialSkillOne,
        initialSkillTwo,
        initialSkillThree,
        onSubmitProp,
        errors
    } = props;
    
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skillOne, setSkillOne] = useState(initialSkillOne);
    const [skillTwo, setSkillTwo] = useState(initialSkillTwo);
    const [skillThree, setSkillThree] = useState(initialSkillThree);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
        })

        setName(initialName);
        setType(initialType);
        setDescription(initialDescription);
        setSkillOne(initialSkillOne);
        setSkillTwo(initialSkillTwo);
        setSkillThree(initialSkillThree);
    }

    return (
        <Form className='border p-3' onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p className='text-danger text-center' key={index}>{err}</p>)}
            <div className='mb-3 row d-flex justify-content-around'>
                <div className='col-5'>
                    <FormGroup>
                    <Label>Pet Name:</Label><br />
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    { errors.name ? 
                            <p>{errors.name.message}</p>
                            : null
                    }
                    </FormGroup>
                    <FormGroup>
                        <Label>Pet Type:</Label><br />
                        <Input
                            type="text"
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                        { errors.type ? 
                                <p>{errors.type.message}</p>
                                : null
                        }<br />
                    </FormGroup>
                    <FormGroup>
                        <Label>Pet Description:</Label><br />
                        <Input
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        { errors.description ? 
                                <p>{errors.description.message}</p>
                                : null
                        }
                    </FormGroup>
                </div>
                <div className='col-5'>
                    <h6 className='mb-3'>Skills (optional):</h6>
                    <FormGroup>
                    <Label>Skill 1:</Label><br />
                    <Input
                        type="text"
                        name="skillOne"
                        value={skillOne}
                        onChange={(e) => setSkillOne(e.target.value)}
                    /><br />
                    </FormGroup>
                    <FormGroup>
                        <Label>Skill 2:</Label><br />
                        <Input
                            type="text"
                            name="skillTwo"
                            value={skillTwo}
                            onChange={(e) => setSkillTwo(e.target.value)}
                        /><br />
                    </FormGroup>
                    <FormGroup>
                        <Label>Skill 3:</Label><br />
                        <Input
                            type="text"
                            name="skillThree"
                            value={skillThree}
                            onChange={(e) => setSkillThree(e.target.value)}
                        /><br />
                    </FormGroup>
                </div>
                <div className='text-center'>
                <Button color='primary' type='submit' value='submit'>Submit</Button>
                </div>
            </div>
        </Form>
    )
}

export default PetForm;