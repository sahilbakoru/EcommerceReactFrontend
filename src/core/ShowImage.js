import React from 'react';
import { API } from '../Config';

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name} 
            className="mb-3"
            style={{
                maxHeight: '25%', maxWidth: '50%'
            }}
        >
        </img>
    </div>
)

export default ShowImage;