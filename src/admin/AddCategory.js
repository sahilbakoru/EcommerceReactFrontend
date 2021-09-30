import React, { useState } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { createCategory} from './apiAdmin'

const AddCategory = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    // destructure user and info from localstorage

    const { user, token } = isAuthenticated();

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        // make  request to api to create category

        createCategory(user._id, token, {name})
        .then(data => {
            if(data.error){
                setError(true)
            } else{
                setError('')
                setSuccess(true)
            }
        })

    }
    
    const newCategoryForm = () => (
        <form >
            <div className="form-group">
                <label >Name</label>
                <input type="text" className="form-control mt-3" onChange={handleChange} value={name} autoFocus required />
            </div>

            <button onClick={clickSubmit} className="btn btn-outline-primary mt-4 bg-blue text-white">Create Category</button>
        </form>
    );

    const showSuccess = () => {
        if(success){
            return <h3 className="text-success text-white"> {name} is created </h3>
        }
    }
    
    const showError = () => {
        if(error){
            return <h3 className="text-danger"> Category should be unique </h3>
        }
    }

    const goBack = () => (
        <div>
            <Link to="/admin/dashboard" className="text-warning" > back to Dashboard</Link>
        </div>
    )

    return (
        <Layout title="Add a new category" description={`G'day ${user.name}, ready to add a new category !`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {goBack()}
                    {newCategoryForm()}
                </div>
            </div>
        </Layout>
    )
};

export default AddCategory;