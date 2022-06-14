import { React, useEffect } from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Cities } from './Cities'
const Signupvalid = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        city: '',
        tncAgreed: '',
    })

    const [formDataValid, setFormDataValid] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        city: '',
        tncAgreed: '',
    })

    const [formSubmitted, setformSubmitted] = useState(false)

    const validate = (e) => {
        e.preventDefault()
        setformSubmitted(true)

        let { name, email, password, confirmPassword, gender, city, tncAgreed } = formData

        if (name === '') {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, name: "please enter a valid name"
            }))
        }
        else {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, name: ""
            }))
        }

        if (email === '' || email.startsWith('@') || !email.includes('@') || email.slice(email.lastIndexOf('.')).length<3) {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, email: "please enter a valid email"
            }))
        }
        else {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, email: ""
            }))
        }

        if (password === '' || password.length<8) {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, password: "please enter a valid password (min. character length 8)"
            }))
        }
        else {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, password: ""
            }))
        }

        if (confirmPassword === '' || confirmPassword.length<8 || confirmPassword !== password) {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, confirmPassword: "password and confirm password are not same"
            }))
        }
        else {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, confirmPassword: ""
            }))
        }

        if (gender === '') {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, gender: "please select a valid gender"
            }))
        }
        else {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, gender: ""
            }))
        }

        if (city === '') {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, city: "please select a valid city"
            }))
        }
        else {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, city: ""
            }))
        }

        if (!tncAgreed) {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, tncAgreed: "please agree to terms and condition"
            }))
        }
        else {
            setFormDataValid((formDataValid) => ({
                ...formDataValid, tncAgreed: ""
            }))
        }
    }

    // useEffect(()=>{

    // },[])
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    // const [gender, setGender] = useState('')
    // const [city, setCity] = useState('')

    return (
        <Form style={{ width: '500px', margin: '40px auto' }}>
            <h1 className='display-4' style={{margin:'20px auto'}}>Sign Up</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                {formSubmitted && (
                    <>
                        <Form.Control.Feedback style={formDataValid.name ? { display: 'none' } : { display: 'block' }}>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid' style={formDataValid.name ? { display: 'block' } : { display: 'none' }}>{formDataValid.name}</Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                {formSubmitted && (
                    <>
                        <Form.Control.Feedback style={formDataValid.email ? { display: 'none' } : { display: 'block' }}>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid' style={formDataValid.email ? { display: 'block' } : { display: 'none' }}>{formDataValid.email}</Form.Control.Feedback>
                    </>
                )}
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                {formSubmitted && (
                    <>
                        <Form.Control.Feedback style={formDataValid.password ? { display: 'none' } : { display: 'block' }}>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid' style={formDataValid.password ? { display: 'block' } : { display: 'none' }}>{formDataValid.password}</Form.Control.Feedback>
                    </>
                )}
            </Form.Group>
            <Form.Text className="text-muted">
                We'll never share your password with anyone else.
            </Form.Text>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                {formSubmitted && (
                    <>
                        <Form.Control.Feedback style={formDataValid.confirmPassword ? { display: 'none' } : { display: 'block' }}>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid' style={formDataValid.confirmPassword ? { display: 'block' } : { display: 'none' }}>{formDataValid.confirmPassword}</Form.Control.Feedback>
                    </>
                )}
            </Form.Group>
            <Form.Text className="text-muted">
                We'll never share your password with anyone else.
            </Form.Text>

            <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <br />
                {['Male', 'Female', 'Others'].map((gender, index) => (
                    <Form.Check
                        inline
                        label={gender}
                        name="group1"
                        type='radio'
                        id={`inline-${index}`}
                        onClick={() => setFormData({ ...formData, gender: gender })}
                    />
                ))}
                {formSubmitted && (
                    <>
                        <Form.Control.Feedback style={formDataValid.gender ? { display: 'none' } : { display: 'block' }}>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid' style={formDataValid.gender ? { display: 'block' } : { display: 'none' }}>{formDataValid.gender}</Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setFormData({ ...formData, city: e.target.value })}>
                    <option>select city</option>
                    {Cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}

                </Form.Select>
                {formSubmitted && (
                    <>
                        <Form.Control.Feedback style={formDataValid.city ? { display: 'none' } : { display: 'block' }}>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid' style={formDataValid.city ? { display: 'block' } : { display: 'none' }}>{formDataValid.city}</Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ textAlign: 'left' }}>
                <Form.Check type="checkbox" label="Agree to Terms and Conditions" onClick={(e) => setFormData({ ...formData, tncAgreed: e.target.checked })} />
                {formSubmitted && (
                    <>
                        <Form.Control.Feedback style={formDataValid.tncAgreed ? { display: 'none' } : { display: 'block' }}>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid' style={formDataValid.tncAgreed ? { display: 'block' } : { display: 'none' }}>{formDataValid.tncAgreed}</Form.Control.Feedback>
                    </>
                )}
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: '100%' }} onClick={validate}>
                Submit
            </Button>
        </Form>
    )
}
export default Signupvalid