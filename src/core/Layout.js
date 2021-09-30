import React from 'react';
import Menu from './Menu';
import '../styles.css';

const Layout = ({ 
    title = "Title", 
    description = "Description", 
    className,
    children
    }) => ( 

    <div className = " bg-success text-white p-2 ">

        <Menu/>    

        <div className = " jumbotron p-4 fw-bold"> 
            <h2>{title}</h2>
            <p className="lead"> {description} </p>
        </div> 

        <div className = {className}>{children}</div>
    </div>
);

export default Layout;