import React, { useEffect } from 'react';
import axios from 'axios';
import './PictureAPI.css';

const PictureAPI = ({ image, handleImage }) => {
    useEffect(async () => {
        const result = await axios.get('https://randomfox.ca/floof/');
        handleImage(result.data.image);
    }, []);

    return (
        <img alt="Picture of a fox" src={image} />
    );
};

export default PictureAPI;
