import React, { useEffect } from 'react';
import axios from 'axios';
import './PictureAPI.css';
import styled from 'styled-components';

const PictureWrapper = styled.img`
    width: 25%;
    position: absolute;
    z-index: -1;
    border-radius: 50px;
    box-shadow: 0px 0px 25px 15px rgba(0,0,0,0.6);
    margin-bottom: 30px;
`

const PictureAPI = ({ image, handleImage }) => {
    useEffect(async () => {
        const result = await axios.get('https://randomfox.ca/floof/');
        handleImage(result.data.image);
    }, []);

    return (
        // <PictureWrapper>
            <img alt="Picture of a fox" src={image} />
        // </PictureWrapper>
    );
};

export default PictureAPI;
