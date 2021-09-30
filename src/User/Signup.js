import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Layout from '../core/Layout';
import {signup} from '../auth'

// const Signup = () =>  {

//     const [value, setValues] = useState({
//         name : '',
//         email : '',
//         password : '',
//         error : '',
//         success : false
//     })

//     const { name, email, password, success, error} = value

//     const changeHandler = name => event => {
//         setValues({...value, error: false, [name] : event.target.value})
//     }

//     const signup = user => {
//         // console.log(name, email, password)
//         return fetch(`${API}/signup`, {
//             method : "Post",
//             headers :{
//                 Accept : 'application/json',
//                 "Content-Type" : "application/json"
//             },
//             body : JSON.stringify(user),
//         })
//         .then(response => {
//             console.log(response)
//             return response.json()
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }

//     const clickSubmit = (event) => {
//         event.preventDefault();
//         signup({name, email, password}).then(data => {
//             console.log(data)
//             if(data.error){
//                 setValues({...value, error : data.error, success : false})
//             } else {
//                 setValues({
//                     ...value,
//                     name : '',
//                     email : '',
//                     password: '',
//                     error : '',
//                     success: true
//                 })
//             }
//         })
//     }

//     const signUpForm = () => (
//         <form className="bg-white p-4 w-50" >
//             <div className="form-group mt-2 ">
//                 <label className="text-muted">Name</label>
//                 <input 
//                     onChange={changeHandler("name")} 
//                     type="text" 
//                     className="form-control"
//                     value={name}
//                 />

//             </div>

//             <div className="form-group mt-2">
//                 <label className="text-muted">Email</label>
//                 <input 
//                     onChange={changeHandler("email")} 
//                     type="email" 
//                     className="form-control" 
//                     value={email}
//                 />
//             </div>

//             <div className="form-group mt-2">
//                 <label className="text-muted">Password</label>
//                 <input 
//                     onChange={changeHandler(" password")} 
//                     type="password" 
//                     className="form-control" 
//                     value={password}    
//                 />
//             </div>

//             <button onClick={clickSubmit} className="btn btn-primary mt-4 offset-md-5">Submit</button>
//         </form>   
//     )    

//     const showError = () => (
//         <div className="alert alert-danger" style= {{display: error ? '' : 'none' }}>
//             {error}
//         </div>)

//     const showSuccess = () => (
//         <div className="alert alert-info w-50" style= {{display: success ? '' : 'none' }}>
//             Account created. Please signin
//         </div>)

//     return( 
//         <Layout 
//                 title="Signup" 
//                 description="Signup to Node React E-commerce App"
//                 className = "container col-md-8 offset-md-4"
//             >
//                 {showSuccess()}
//                 {showError()}
//                 {signUpForm()}
//                 {JSON.stringify(value)}
//         </Layout>
//     )    
// }

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, success, error } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false})
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }

                else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    })
                }
            })
    }

    const signUpForm = () => (
        <form className='bg-white p-4'>
            <div className=" form-group mt-2">
                <label className='text-muted'>Name</label>
                <input onChange={handleChange('name')} type='text' className='form-control' value={name} />
            </div>

            <div className=" form-group mt-2">
                <label className='text-muted'>Email</label>
                <input onChange={handleChange('email')} type='email' className='form-control' value={email} />
            </div>

            <div className=" form-group mt-2">
                <label className='text-muted'>Password</label>
                <input onChange={handleChange('password')} type='password' className='form-control' value={password} />
            </div>

            <button onClick={clickSubmit} className='btn btn-primary mt-4'>Submit</button>
        </form>

    )

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }} >
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }} >
            New Account has been created. Please <Link to="/signin">SignIn</Link>
        </div>
    )

    return (
        <Layout
            title='SignUp'
            description='Signup to Application'
            className="container col-md-4 offset-md-4"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()} 
        </Layout>
    )
}



export default Signup;